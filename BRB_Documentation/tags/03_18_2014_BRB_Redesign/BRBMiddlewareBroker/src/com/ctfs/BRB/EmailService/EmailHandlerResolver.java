package com.ctfs.BRB.EmailService;

import java.util.List;
import java.util.ArrayList;
import javax.xml.ws.handler.Handler;
import javax.xml.ws.handler.HandlerResolver;
import javax.xml.ws.handler.PortInfo;

public class EmailHandlerResolver implements HandlerResolver
{
	private String username;
    private String password;
    
	public EmailHandlerResolver (final String username, final String password) {
		this.username = username;
        this.password = password;
	}
	
	@Override
	public List<Handler> getHandlerChain(PortInfo portInfo)
	{
		List<Handler> handlerChain = new ArrayList<Handler>();

		ExactTargetAuthenticationHandler authHandler = 
			new ExactTargetAuthenticationHandler(this.username, this.password);

		handlerChain.add(authHandler);

		return handlerChain;
	}
	
	public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
