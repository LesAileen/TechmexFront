package com.techmex.techmex.Data.Dao;

import com.techmex.techmex.Data.Entities.OrdenesModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IOrdenesDao extends JpaRepository<OrdenesModel, Integer> {
        Optional<OrdenesModel> findById(Integer id);
}
