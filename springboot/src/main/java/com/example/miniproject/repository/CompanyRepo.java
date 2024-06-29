package com.example.miniproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.miniproject.entity.Company;

public interface CompanyRepo extends JpaRepository<Company, String> {

    @Query(value="select c from Company c")
    public List<Company> getAll();
}
