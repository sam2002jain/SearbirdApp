package com.example.miniproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="branch")
public class Branch {

    @Id
    public String branchId;

    public String branchName;

    public String companyId;

    public Branch() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Branch(String branchId, String branchName, String companyId) {
        super();
        this.branchId = branchId;
        this.branchName = branchName;
        this.companyId = companyId;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }



}
