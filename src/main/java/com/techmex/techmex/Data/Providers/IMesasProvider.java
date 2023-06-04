package com.techmex.techmex.Data.Providers;

import com.techmex.techmex.Dtos.MesasDto;

import java.util.List;

public interface IMesasProvider {

    List<MesasDto> getMesas();
    MesasDto getMesasId(Integer id);
    MesasDto insertMesas(Integer capacidad, Integer qr, boolean llevar);
    MesasDto updateMesas(Integer id, Integer capacidad, Integer qr, boolean llevar);
    void deleteMesasId(Integer id);


}
