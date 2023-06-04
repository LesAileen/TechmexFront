package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.ICategoriasService;
import com.techmex.techmex.Data.Providers.ICategoriasProvider;
import com.techmex.techmex.Dtos.CategoriasDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoriasService implements ICategoriasService {

    private final ICategoriasProvider categoriasProvider;
    @Override
    public List<CategoriasDto> getListaCategorias() {
        return categoriasProvider.getCategorias();
    }

    @Override
    public CategoriasDto getCategoriasId(Integer id) {
        return categoriasProvider.getCategoriasId(id);

    }

    @Override
    public CategoriasDto insertCategorias(String categoria) {
        return categoriasProvider.insertCategorias(categoria);
    }

    @Override
    public CategoriasDto updateCategorias(Integer id, String categoria) {
        return categoriasProvider.updateCategorias(id, categoria);
    }

    @Override
    public void deleteCategoriasId(Integer id) {
        categoriasProvider.deleteCategoriasId(id);
    }
}
