package com.techmex.techmex.Data.Dao;

import com.techmex.techmex.Data.Entities.CategoriasModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ICategoriasDao  extends JpaRepository<CategoriasModel, Integer> {

    Optional<CategoriasModel>findById(Integer id);

}
