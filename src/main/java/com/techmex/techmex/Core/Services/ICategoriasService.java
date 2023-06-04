package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.CategoriasDto;

import java.util.List;

public interface ICategoriasService {
    List<CategoriasDto> getListaCategorias();
    CategoriasDto getCategoriasId(Integer id);
    CategoriasDto insertCategorias(String categoria);

    CategoriasDto updateCategorias(Integer id, String categoria);
    void deleteCategoriasId(Integer id);
}
