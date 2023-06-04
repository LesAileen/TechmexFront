package com.techmex.techmex.Data.Providers;

import com.techmex.techmex.Dtos.LineasOrdenDto;
import com.techmex.techmex.Dtos.OrdenesDto;

import java.util.List;

public interface IOrdenesProvider {
    List<OrdenesDto> getOrdenes();
    OrdenesDto getOrdenesId(Integer id);
    OrdenesDto insertOrdenes(Integer mesa_id, Integer usuario_id );
    OrdenesDto updateOrdenes(Integer orden_id, Integer mesa_id, Integer usuario_id);
    void deleteOrdenes(Integer id);
}
