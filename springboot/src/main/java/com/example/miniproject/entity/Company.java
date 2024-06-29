package com.example.miniproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "company")
public class Company {

    @Id
    public String companyId;

    public String companyName;

    public Company() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Company(String companyId, String companyName) {
        super();
        this.companyId = companyId;
        this.companyName = companyName;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }



}
