package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.ILineasOrdenService;
import com.techmex.techmex.Data.Providers.ILineasOrdenProvider;
import com.techmex.techmex.Dtos.LineasOrdenDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LineasOrdenService implements ILineasOrdenService {

    private final ILineasOrdenProvider lineasOrdenProvider;
    @Override
    public List<LineasOrdenDto> getListaLineasOrden() {
        return lineasOrdenProvider.getLineasOrden();
    }

    @Override
    public LineasOrdenDto getLineasOrdenId(Integer id) {
        return lineasOrdenProvider.getLineasOrdenId(id);
    }

    @Override
    public LineasOrdenDto insertLineasOrden(Integer orden_id, Integer cantidad, Integer producto_id) {
        return lineasOrdenProvider.insertLineasOrden(orden_id, cantidad, producto_id);
    }

    @Override
    public LineasOrdenDto updateLineasOrden(Integer linea_orden_id, Integer orden_id, Integer cantidad, Integer producto_id) {
        return lineasOrdenProvider.updateLineasOrden(linea_orden_id, orden_id, cantidad, producto_id);
    }

    @Override
    public void deleteLineasOrden(Integer id) {
        lineasOrdenProvider.deleteLineasOrden(id);
    }
}
