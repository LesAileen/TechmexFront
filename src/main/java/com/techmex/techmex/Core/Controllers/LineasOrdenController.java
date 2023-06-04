package com.techmex.techmex.Core.Controllers;

import com.techmex.techmex.Core.Services.ILineasOrdenService;
import com.techmex.techmex.Dtos.LineasOrdenDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/lineasOrden")
public class LineasOrdenController {
    private final ILineasOrdenService lineasOrdenService;

    @GetMapping("/lista")
    public List<LineasOrdenDto> listaLineasOrden(){
        return lineasOrdenService.getListaLineasOrden();
    }
    @GetMapping("/buscar/{id}")
    public LineasOrdenDto buscarLineasOrdenId(@PathVariable Integer id){
        return lineasOrdenService.getLineasOrdenId(id);
    }
    @PostMapping("/insertar")
    public LineasOrdenDto insertarLineasOrden(Integer orden_id,Integer cantidad, Integer producto_id){
        return  lineasOrdenService.insertLineasOrden(orden_id, cantidad, producto_id);
    }
    @PutMapping("/actualizar/{id}")
    public LineasOrdenDto updateLineasOrden(@PathVariable Integer id,Integer orden_id,Integer cantidad, Integer producto_id){
        return lineasOrdenService.updateLineasOrden(id, orden_id, cantidad, producto_id);
    }
    @DeleteMapping("/borrar/{id}")
    public void borrarLineasOrden(@PathVariable Integer id){
        lineasOrdenService.deleteLineasOrden(id);
    }
}
