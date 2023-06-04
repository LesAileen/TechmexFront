package com.techmex.techmex.Data.Dao;

import com.techmex.techmex.Data.Entities.LineasOrdenModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ILineasOrdenDao extends JpaRepository<LineasOrdenModel, Integer> {

        Optional<LineasOrdenModel> findById(Integer id);
    }


