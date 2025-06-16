package com.yuhan.mobileproject;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;
import android.util.Pair;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;

import androidx.core.content.ContextCompat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyWebChrome extends WebChromeClient {
    MyWebChrome(Context context, RequestPermissionInterface requestPermissionInterface) {
        this.context = context;
        this.requestPermissionInterface = requestPermissionInterface;
    }

    private final Context context;
    private RequestPermissionInterface requestPermissionInterface = null;
    private final List<String> locationPermissionsList = Arrays.asList(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION,
            Manifest.permission.INTERNET,
            Manifest.permission.ACCESS_BACKGROUND_LOCATION);

    @Override
    public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
        super.onGeolocationPermissionsShowPrompt(origin, callback);
        Log.d(MainActivity.class.getSimpleName(), "inside onGeoLocationPermissionShowPrompt");
        handleLocationPermissions();
    }

    @Override
    public void onGeolocationPermissionsHidePrompt() {
        Log.e(MainActivity.class.getSimpleName(), "Geo Location permission cancelled!");
        super.onGeolocationPermissionsHidePrompt();
    }

    private void handleLocationPermissions() {
        Pair<Boolean, List<String>> hasPermissions =
                checkMultiplePermissions(context, locationPermissionsList);

        if (!hasPermissions.first) {
            requestPermissionInterface.onRequestMissingPermission(hasPermissions.second);
        }
    }
    public static Pair<Boolean, List<String>> checkMultiplePermissions(Context context, List<String> permissionsList) {
        if (context == null)
            throw new NullPointerException("Context cannot be null");

        List<String> missingPermissions = new ArrayList<>();
        for (String permissionToCheck : permissionsList) {
            if (ContextCompat.checkSelfPermission(context, permissionToCheck) != PackageManager.PERMISSION_GRANTED) {
                missingPermissions.add(permissionToCheck);
            }
        }
        return new Pair<>(missingPermissions.size() == 0, missingPermissions);
    }

}

interface RequestPermissionInterface {
    void onRequestMissingPermission(List<String> permissionList);
}
