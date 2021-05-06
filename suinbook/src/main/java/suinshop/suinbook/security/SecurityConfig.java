package suinshop.suinbook.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import suinshop.suinbook.encode.BCryptImpl;
import suinshop.suinbook.encode.EncryptHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web) throws Exception {

        web.ignoring().antMatchers("/js/**","/css/**","/images/**","/font/**","/html/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
                .antMatchers("/admin/**").hasRole("ADMIN")
                .antMatchers("/**").permitAll()
                .and()
                .formLogin()
                .loginPage("/login/form")
                .usernameParameter("userId")
                .passwordParameter("password")
                .loginProcessingUrl("/login/perform")
                .defaultSuccessUrl("/login/success")
                .failureUrl("/login/fail")
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/login/logout")
                .invalidateHttpSession(true)
                .and()
                .exceptionHandling().accessDeniedPage("/login/denied");

        http.cors().disable()
                .csrf().disable()
                .formLogin().disable()
                .headers().frameOptions().disable();
    }

    /**
     * @Bean -> @Autowired PasswordEncoder -> class binding
     * */

    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }

    @Bean
    public EncryptHandler encryptConfigure() {

        return new BCryptImpl();
    }
}
