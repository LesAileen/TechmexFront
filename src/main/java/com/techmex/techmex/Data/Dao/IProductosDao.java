package com.techmex.techmex.Data.Dao;

import com.techmex.techmex.Data.Entities.ProductosModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IProductosDao extends JpaRepository<ProductosModel, Integer> {

    Optional<ProductosModel>findById(Integer id);
}
