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
import java.util.Date;
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
public class GastosMB implements Serializable{
    
    private Gastos gas = new Gastos();
   
    @EJB
    private GastosRemote ejb = new GastosBean(); 
    
    /**
     * Creates a new instance of GastosMB
     */
    public GastosMB() {

    }
    
    @PostConstruct
    public void init(){
        
    }

    public Gastos getGas() {
        return gas;
    }

    public void setGas(Gastos gas) {
        this.gas = gas;
    }
    
    
    public void salvar() throws Exception{
        try{

        
        gas.setData(new Date());
        System.out.println("gas:" + gas);

        gas = ejb.salvar(gas);
        if(gas.getId() != null){
            System.out.println("gastos salvo com sucesso");
            gas = new Gastos();
            
        }else{
            System.out.println("gastos não salvos");
        }
        }catch(Exception e ){
            e.printStackTrace();
        }
        
    }
    
    
    
    
}
