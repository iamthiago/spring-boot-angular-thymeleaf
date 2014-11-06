package com.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author thiago
 *
 */
@Controller
public class HomeController {

	@RequestMapping("/")
	public ModelAndView index() {
		return new ModelAndView("index");
	}

	@RequestMapping(value = "templates/{page}", method = RequestMethod.GET)
	public ModelAndView getLayout(@PathVariable("page") String page) {
		return new ModelAndView(page);
	}
}