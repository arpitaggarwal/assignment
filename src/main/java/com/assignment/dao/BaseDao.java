package com.assignment.dao;

/**
 * Class <code>BaseDao</code> is the base class class to be extended for
 * performing database operations.
 * 
 * @author ArpitAggarwal
 *
 * @param <T>
 */
public abstract class BaseDao<T> {

	protected abstract Class<T> getEntityClass();

	public void save(final T record) {
		// save call to db
	}

	public void update(final T record) {
		// update call to db
	}

}
