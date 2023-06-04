package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.LineasOrdenDto;

import java.util.List;

public interface ILineasOrdenService {
    List<LineasOrdenDto> getListaLineasOrden();
    LineasOrdenDto getLineasOrdenId(Integer id);
    LineasOrdenDto insertLineasOrden(Integer orden_id, Integer cantidad, Integer producto_id );
    LineasOrdenDto updateLineasOrden(Integer linea_orden_id, Integer orden_id, Integer cantidad, Integer producto_id);
    void deleteLineasOrden(Integer id);
}
