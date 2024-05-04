package Conversor;

public class ConversorByte {
    public static double bytesToGB(long bytes) {
        return bytes / (1024.0 * 1024 * 1024);
    }
}

