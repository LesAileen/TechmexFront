package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.MesasDto;

import java.util.List;

public interface IMesasService {
    List<MesasDto> getListaMesas();
    MesasDto getMesasId(Integer id);
    MesasDto insertMesas(Integer capacidad, Integer qr, boolean llevar);
    MesasDto updateMesas(Integer id, Integer capacidad, Integer qr, boolean llevar);
    void deleteMesasId(Integer id);
}
