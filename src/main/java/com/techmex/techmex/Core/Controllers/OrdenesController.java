package com.techmex.techmex.Core.Controllers;

import com.techmex.techmex.Core.Services.IOrdenesService;
import com.techmex.techmex.Dtos.OrdenesDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/ordenes")
public class OrdenesController {
    private final IOrdenesService OrdenesService;

    // GET = SELECT...
    @GetMapping("/lista")
    public List<OrdenesDto> listaOrdenes () {

        return OrdenesService.getListaOrdenes();
    }
    // GET = SELECT...
    @GetMapping ("/buscar/{id}")
    public OrdenesDto buscarOrdenId(@PathVariable Integer id) {

        return OrdenesService.getOrdenesId(id);
    }
    // POST = INSERT...
    @PostMapping("/insertar")
    public OrdenesDto inserterOrden(Integer mesa_id, Integer usuario_id) {

        return OrdenesService.insertOrdenes(mesa_id, usuario_id);
    }
    // PUT = UPDATE...
    @PutMapping ("/actualizar/{id}")
    public OrdenesDto updateOrden(@PathVariable Integer id,Integer mesa_id, Integer usuario_id) {

        return OrdenesService.updateOrdenes(id, mesa_id, usuario_id);
    }
    // DELETE = DELETE...
    @DeleteMapping ("/borrar/{id}")
    public void borrarOrden (@PathVariable Integer id) {

        OrdenesService.deleteOrdenes(id);
    }

}
