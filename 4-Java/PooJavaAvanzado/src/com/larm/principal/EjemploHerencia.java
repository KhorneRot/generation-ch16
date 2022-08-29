package com.jra.principal;

import com.larm.herencia.BasePadre;
import com.larm.herencia.Hija;
import com.larm.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {

        Hija h=new Hija();
        h.visualizarA();
        Hijo ho=new Hijo();
        ho.setA(15261);
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2357);
        Object miObj = new BasePadre();


        System.out.println("Atributo de la clase padre -> "+obj.getA());
        System.out.println("Atributo de la clase hijo-> "+ ho.getA());
    }
}