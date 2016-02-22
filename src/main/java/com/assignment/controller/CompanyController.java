package com.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.domain.Company;
import com.assignment.service.ICompanyService;

/**
 * Class <code>CompanyController</code> bind create, update and details of a
 * {@link Company} actions from user interface.
 * 
 * @author ArpitAggarwal
 *
 */
@RestController
@RequestMapping(value = "/company")
public class CompanyController {

	@Autowired
	private ICompanyService companyService;

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public void create(@RequestBody Company company) {
		companyService.create(company);
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void update(@RequestBody Company company) {
		companyService.update(company);
	}

	@RequestMapping(value = "/add-owners", method = RequestMethod.POST)
	public void addOwners(@RequestParam String companyName,
			@RequestParam List<String> owners) {
		companyService.addOwners(companyName, owners);
	}

	@RequestMapping(value = "/get", method = RequestMethod.GET)
	public List<Company> get(@RequestParam(required = false) String filter) {
		return companyService.get(filter);
	}

	@RequestMapping(value = "/get/{company:.+}", method = RequestMethod.GET)
	public List<Company> get(@PathVariable String company,
			@RequestParam(required = false) String filter) {
		return companyService.getDetails(filter);
	}
}
