package suinshop.suinbook.encode;

public interface EncryptHandler {

    String encrypt(String password);

    boolean isMathch(String password, String hashpassword);
}
