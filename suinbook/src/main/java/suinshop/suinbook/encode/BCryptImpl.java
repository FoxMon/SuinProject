package suinshop.suinbook.encode;

import org.springframework.security.crypto.bcrypt.BCrypt;

public class BCryptImpl implements EncryptHandler {

    @Override
    public String encrypt(String password) {

        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    @Override
    public boolean isMathch(String password, String hashpassword) {

        return BCrypt.checkpw(password, hashpassword);
    }
}
