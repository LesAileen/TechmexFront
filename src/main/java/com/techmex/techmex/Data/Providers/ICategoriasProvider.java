package com.techmex.techmex.Data.Providers;

import com.techmex.techmex.Dtos.CategoriasDto;

import java.util.List;

public interface ICategoriasProvider {
    List<CategoriasDto> getCategorias();
    CategoriasDto getCategoriasId(Integer id);
    CategoriasDto insertCategorias(String categoria);

    CategoriasDto updateCategorias(Integer id, String categoria);
    void deleteCategoriasId(Integer id);
}
