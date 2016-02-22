package com.assignment.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.dao.CompanyDao;
import com.assignment.domain.Company;
import com.assignment.service.ICompanyService;

/**
 * Class <code>CompanyService</code> an implementation of
 * com.assignment.service.ICompanyService to create, update and details
 * of a {@link Company}
 * 
 * @author ArpitAggarwal
 *
 */
@Service
public class CompanyService implements ICompanyService {

	@Autowired
	private CompanyDao companyDao;

	public void create(final Company company) {
		if (company != null) {
			companyDao.save(company);
		}
	}

	public void update(Company company) {
		if (company != null) {
			companyDao.update(company);
		}
	}

	public List<Company> get(final String criteria) {
		return companyDao.findAll();
	}

	public List<Company> getDetails(final String companyName) {
		if (StringUtils.isNotBlank(companyName)) {
			List<Company> companiesList = companyDao.findAll();
			return companiesList.stream()
					.filter(element -> element.getName().equals(companyName))
					.collect(Collectors.toList());
		}
		return Collections.emptyList();
	}

	public void addOwners(final String companyName, final List<String> owners) {
		if (StringUtils.isNotBlank(companyName)
				&& CollectionUtils.isNotEmpty(owners)) {
			final List<Company> companiesList = companyDao.findAll();
			final List<Company> companyL = companiesList.stream()
					.filter(element -> element.getName().equals(companyName))
					.collect(Collectors.toList());
			if (CollectionUtils.isNotEmpty(companyL)) {
				final Company company = companyL.get(0);
				company.getOwners().addAll(owners);
				companyDao.update(company);
			}
		}
	}
}