package suinshop.suinbook.encode;

public interface EncryptHandler {

    public String encrypt(String password);

    public boolean isMathch(String password, String hashpassword);
}
