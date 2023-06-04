package com.techmex.techmex.Core.Controllers;

import com.techmex.techmex.Core.Services.IFacturasService;
import com.techmex.techmex.Core.Services.Impl.FacturasService;
import com.techmex.techmex.Dtos.FacturasDto;
import lombok.AllArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/facturas")
public class FacturasController {
    private final IFacturasService facturasService;
    @GetMapping("/lista")
    public List<FacturasDto> listaFacturas(){
        return facturasService.getListaFacturas();
    }
    @GetMapping("/buscar/{id}")
    public FacturasDto buscarFacturaId(@PathVariable Integer id){
        return facturasService.getFacturasId(id);
    }

    @PostMapping("/insertar")
    public FacturasDto insertarFactura(Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id ){
        return facturasService.insertFacturas(fecha, total, efectivo, cambio, forma_pago_id, orden_id);
    }

    @PutMapping("/actualizar/{id}")
    public FacturasDto updateFactura(@PathVariable Integer id, Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id ){
        return facturasService.updateFacturas(id, fecha, total, efectivo, cambio, forma_pago_id, orden_id);
    }

    @DeleteMapping("/borrar/{id}")
    public void borrarFacturas(@PathVariable Integer id){
        facturasService.deleteFacturasId(id);
    }
}
