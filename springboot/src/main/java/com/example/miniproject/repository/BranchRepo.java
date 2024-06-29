package com.example.miniproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.miniproject.entity.Branch;

public interface BranchRepo extends JpaRepository<Branch, String> {

    @Query(value="select b from Branch b where b.companyId=:cid")
    List<Branch> getBranchByCompany(@Param("cid") String cid);
}
