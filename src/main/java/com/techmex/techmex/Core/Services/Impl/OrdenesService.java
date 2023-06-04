package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.IOrdenesService;
import com.techmex.techmex.Data.Providers.IOrdenesProvider;
import com.techmex.techmex.Dtos.OrdenesDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrdenesService implements IOrdenesService {
    private final IOrdenesProvider ordenesProvider;
    @Override
    public List<OrdenesDto> getListaOrdenes() {
        return ordenesProvider.getOrdenes();
    }

    @Override
    public OrdenesDto getOrdenesId(Integer id) {
        return ordenesProvider.getOrdenesId(id);
    }

    @Override
    public OrdenesDto insertOrdenes(Integer mesa_id, Integer usuario_id) {
        return ordenesProvider.insertOrdenes(mesa_id, usuario_id);
    }

    @Override
    public OrdenesDto updateOrdenes(Integer orden_id, Integer mesa_id, Integer usuario_id) {
        return ordenesProvider.updateOrdenes(orden_id,mesa_id,usuario_id);
    }

    @Override
    public void deleteOrdenes(Integer id) {
        ordenesProvider.deleteOrdenes(id);
    }
}
