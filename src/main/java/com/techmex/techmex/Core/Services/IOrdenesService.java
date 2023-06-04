package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.OrdenesDto;

import java.util.List;

public interface IOrdenesService {
    List<OrdenesDto> getListaOrdenes();
    OrdenesDto getOrdenesId(Integer id);
    OrdenesDto insertOrdenes(Integer mesa_id, Integer usuario_id );
    OrdenesDto updateOrdenes(Integer orden_id, Integer mesa_id, Integer usuario_id);
    void deleteOrdenes(Integer id);
}
