package com.ctfs.wicimobile.frw;

public interface AsyncCallback<R, E extends Throwable> {
    void success(R result);

    void fail(E error);
}