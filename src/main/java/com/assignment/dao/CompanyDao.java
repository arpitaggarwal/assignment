package com.assignment.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.assignment.data.ApplicationData;
import com.assignment.domain.Company;

/**
 * Class <code>CompanyDao</code> contains definition to be used to save
 * {@link Company} objects.
 * 
 * @author ArpitAggarwal
 */
@Repository
public class CompanyDao extends BaseDao<Company> {

	@Override
	protected Class<Company> getEntityClass() {
		return Company.class;
	}

	public List<Company> findAll() {
		return ApplicationData.getAllCompanies();
	}

}
