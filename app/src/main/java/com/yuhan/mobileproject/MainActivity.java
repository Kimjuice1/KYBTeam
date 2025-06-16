package com.yuhan.mobileproject;

import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // WebView는 여기서 초기화만 (설정은 권한 확인 후에)
        webView = findViewById(R.id.webview);

        // 권한 확인 및 요청 제거, 바로 WebView 초기화
        initializeAndLoadWebView();
    }

    // WebView 초기화 함수 (권한 허용 후에만 호출됨)
    private void initializeAndLoadWebView() {
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);             /// JS 활성화
        webSettings.setDomStorageEnabled(true);             /// PWA 사용 시 필요
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setUseWideViewPort(true);
        webSettings.setSupportZoom(false);
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        webSettings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);

        webView.setWebViewClient(new WebViewClient());

        webView.setWebChromeClient(new WebChromeClient());

        // React PWA 사이트 주소 입력
        webView.loadUrl("https://yuhan-cert.kr");
    }

    @Override
    public void onBackPressed() {                           /// 화면에서 뒤로가기 사용 시 PWA 사이트 뒤로가기
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}