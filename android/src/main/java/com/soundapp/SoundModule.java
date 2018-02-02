package com.soundapp;

import android.media.MediaPlayer;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SoundModule extends ReactContextBaseJavaModule {
    
    private ReactApplicationContext context;
    private MediaPlayer mediaPlayer;
    
    public SoundModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }
    
    @Override
    public String getName() {
        return "SoundManager";
    }
    
    @ReactMethod
    public void playSound(String soundPath) {
        try {
            int resource = context.getResources().getIdentifier(soundPath, "raw", context.getPackageName());
            if(mediaPlayer != null) {
                mediaPlayer.release();
                mediaPlayer = null;
            }
            mediaPlayer = MediaPlayer.create(this.getReactApplicationContext(), resource);
            mediaPlayer.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void stopSound() {
        try {
            if(mediaPlayer != null) {
                mediaPlayer.release();
                mediaPlayer = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void playSoundRepeat(String soundPath) {
        try {
            int resource = context.getResources().getIdentifier(soundPath, "raw", context.getPackageName());
            if(mediaPlayer != null) {
                mediaPlayer.release();
                mediaPlayer = null;
            }
            mediaPlayer = MediaPlayer.create(this.getReactApplicationContext(), resource);
            mediaPlayer.setLooping(true);
            mediaPlayer.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void playSoundMusicVolume(final Float left, final Float right){
        if(mediaPlayer != null) {
            mediaPlayer.setVolume(left, right);
        }
    }

}
