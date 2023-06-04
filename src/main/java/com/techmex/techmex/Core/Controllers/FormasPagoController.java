package com.techmex.techmex.Core.Controllers;


import com.techmex.techmex.Core.Services.IFormasPagoService;

import com.techmex.techmex.Dtos.FormasPagoDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/formasPago")
public class FormasPagoController {

    private final IFormasPagoService formasPagoService;
    @GetMapping("/lista")
    public List<FormasPagoDto> listaFormasPago(){
            return formasPagoService.getListaFormasPago();

    }
    @GetMapping("/buscar/{id}")
    public FormasPagoDto buscarFormasPagoId(@PathVariable Integer id){
        return formasPagoService.getFormasPagoId(id);
    }

    @PostMapping("/insertar")
    public FormasPagoDto insertarFormasPago(String forma_pago){
        return formasPagoService.insertFormasPagoId(forma_pago);
    }

    @PutMapping("/actualizar/{id}")
    public  FormasPagoDto updateFormasPago(@PathVariable Integer id, String forma_pago){
        return formasPagoService.updateFormasPago(id, forma_pago);

    }

    @DeleteMapping("/actualizar/{id}")
    public void borrarFormasPago(@PathVariable Integer id){
        formasPagoService.deleteFormasPagoId(id);
    }

}
