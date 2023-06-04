package com.techmex.techmex.Core.Controllers;


import com.techmex.techmex.Core.Services.IMesasService;
import com.techmex.techmex.Dtos.MesasDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping ("/mesas")
public class MesasController {
    private final IMesasService mesasService;

    @GetMapping("/lista")
    public List<MesasDto> listaMesas(){ return mesasService.getListaMesas();
    }

    @GetMapping("/buscar/{id}")
    public MesasDto buscarMesasId (@PathVariable Integer id){
        return mesasService.getMesasId(id);

    }

    @PostMapping("/insertar")
    public MesasDto insertarMesa(Integer capacidad, Integer qr, boolean llevar) {
        return mesasService.insertMesas(capacidad,qr,llevar);
    }

    @PutMapping("/actualizar/{id}")
    public MesasDto updateMesa (@PathVariable Integer id, Integer capacidad, Integer qr, boolean llevar ){
        return mesasService.updateMesas(id, capacidad, qr, llevar);
    }

    @DeleteMapping("/borrar/{id}")
    public void borrarMesa (@PathVariable Integer id){
        mesasService.deleteMesasId(id);
    }
}
