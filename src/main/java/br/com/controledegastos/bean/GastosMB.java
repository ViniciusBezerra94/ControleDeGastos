/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.controledegastos.bean;

import br.com.controledegastos.ejb.GastosBean;
import br.com.controledegastos.ejb.GastosRemote;
import br.com.controledegastos.entity.Gastos;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

/**
 *
 * @author vinicius
 */
@ManagedBean
@ViewScoped
public class GastosMB implements Serializable {

    private Gastos gas = new Gastos();

    @EJB
    private GastosRemote ejb = new GastosBean();
    private List<Gastos> gastos;
    
    String dataGasto = "";

    /**
     * Creates a new instance of GastosMB
     */
    public GastosMB() {

    }

    @PostConstruct
    public void init() {
        try {
            gastos = ejb.buscarTodosGastos();
        } catch (Exception e) {

        }
    }

    public Gastos getGas() {
        return gas;
    }

    public void setGas(Gastos gas) {
        this.gas = gas;
    }

    public void salvar() throws Exception {
        try {
            SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
            gas.setData(formato.parse(dataGasto));
            System.out.println("gas:" + gas);

            gas = ejb.salvar(gas);
            if (gas.getId() != null) {
                System.out.println("gastos salvo com sucesso");
                gas = new Gastos();
                dataGasto = "";

            } else {
                System.out.println("gastos não salvos");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public List<Gastos> getGastos() {
        return gastos;
    }

    public void setGastos(List<Gastos> gastos) {
        this.gastos = gastos;
    }
    
    
    public void editar(Gastos gasto){
        gas = gasto;
    }

    public String getDataGasto() {
        return dataGasto;
    }

    public void setDataGasto(String dataGasto) {
        this.dataGasto = dataGasto;
    }
    
    
    
    
    public void remover(Gastos gasto){
        ejb.remover(gasto.getId());
    }
    
    public double retornarSomaDespesas(List<Gastos> g , String despesa){
        double total = 0;
        for(int i =0; i < g.size(); i++){
            if(g.get(i).getTipoGasto().equalsIgnoreCase(despesa)){
                total = total + g.get(i).getValor();
            }
        }
        return total;
    }
    
    public String calcularTotal(List<Gastos>g){
        return "" + (retornarSomaDespesas(g, "receita") - retornarSomaDespesas(g, "despesa"));
    }
    
    
    public String formatarData(Date d){
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
        return formato.format(d);
    }
    
    

}
