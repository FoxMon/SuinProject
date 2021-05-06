package suinshop.suinbook.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import suinshop.suinbook.encode.EncryptHandler;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EncryptTest {

    @Autowired
    private EncryptHandler encryptHandler;

    @Test
    public void 비밀번호_체크() {

        String password = "FoxMon1!";
        String encrypted = encryptHandler.encrypt(password);

        System.out.println(encrypted);

        if(encryptHandler.isMathch(password, encrypted)) {

            System.out.println("성공");
        }
    }
}
