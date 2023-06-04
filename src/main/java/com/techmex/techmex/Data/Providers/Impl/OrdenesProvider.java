package com.techmex.techmex.Data.Providers.Impl;


import com.techmex.techmex.Data.Dao.IOrdenesDao;
import com.techmex.techmex.Data.Providers.IOrdenesProvider;
import com.techmex.techmex.Dtos.OrdenesDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class OrdenesProvider implements IOrdenesProvider {
    private final IOrdenesDao iOrdenesDao;



    @Override
    public List<OrdenesDto> getOrdenes() {
        return null;
    }

    @Override
    public OrdenesDto getOrdenesId(Integer id) {
        return null;
    }

    @Override
    public OrdenesDto insertOrdenes(Integer mesa_id, Integer usuario_id) {
        return null;
    }

    @Override
    public OrdenesDto updateOrdenes(Integer orden_id, Integer mesa_id, Integer usuario_id) {
        return null;
    }

    @Override
    public void deleteOrdenes(Integer id) {

    }
}
