package com.assignment.service;

import java.util.List;

import com.assignment.domain.Company;

/**
 * ICompanyService is a service layer to create, update and details of a
 * {@link Company}
 * 
 * @author ArpitAggarwal
 *
 */
public interface ICompanyService {
	/**
	 * Save {@link Company}
	 * 
	 * @param company
	 *            {@link Company}
	 */
	void create(final Company company);

	/**
	 * Update {@link Company}
	 * 
	 * @param company
	 *            {@link Company}
	 */
	void update(final Company company);

	/**
	 * Get list of {@link Company} for related search criteria
	 * 
	 * @param criteria
	 *            String filter to be used to search
	 * @return {@link List<Company>} list of companies
	 */
	List<Company> get(final String criteria);

	/**
	 * Get details of a {@link Company} related to name of a company
	 * 
	 * @param companyName
	 *            String name of a company
	 * @return @link List<Company>} list of company
	 */
	List<Company> getDetails(final String companyName);

	/**
	 * Add owner to existing {@link Company}
	 * 
	 * @param companyName
	 *            String name of a {@link Company}
	 * @param owners
	 *            list of owners to be added to be a {@link Company}
	 */
	void addOwners(final String companyName, final List<String> owners);
}
