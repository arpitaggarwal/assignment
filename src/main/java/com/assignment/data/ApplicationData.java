package com.assignment.data;

import java.util.ArrayList;
import java.util.List;

import com.assignment.domain.Company;

/**
 * Class <code>ApplicationData</code> exposes methods with dummy data.
 * 
 * @author ArpitAggarwal
 *
 */
public class ApplicationData {
	/**
	 * Get list of all companies.
	 * 
	 * @return {@link List<Company>}
	 */
	public static List<Company> getAllCompanies() {
		List<Company> companiesList = new ArrayList<>();
		List<String> ownersList = new ArrayList<>();
		ownersList.add("A");
		ownersList.add("B");
		companiesList.add(new Company(1, "Company1", "3/12", "Newyork", "USA",
				"company1@gmail.com", "123456789", ownersList));
		companiesList.add(new Company(2, "Company2", "4/12", "Amsterdam",
				"Netherlands", "company2@gmail.com", "123456089", ownersList));
		companiesList.add(new Company(3, "Company3", "5/12", "Hilversum",
				"Netherlands", "company3@gmail.com", "123458789", ownersList));
		companiesList.add(new Company(4, "Company4", "6/12", "Delhi", "India",
				"company4@gmail.com", "123456780", ownersList));
		return companiesList;
	}
}
