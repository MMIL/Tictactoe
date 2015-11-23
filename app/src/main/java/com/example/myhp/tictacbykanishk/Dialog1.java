package com.example.myhp.tictacbykanishk;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

/**
 * Created by my hp on 10/14/2015.
 */
public class Dialog1 extends Activity implements View.OnClickListener {
    TextView view;
    Button button,exit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.dialog);
        view=(TextView) findViewById(R.id.textdialog);
        button=(Button) findViewById(R.id.restdialog);
        exit=(Button) findViewById(R.id.dialogexit);
        button.setOnClickListener(this);
        exit.setOnClickListener(this);
        Bundle get=getIntent().getExtras();
        if(get.getChar("key")!='a')
            view.setText("Player "+get.getChar("key")+" is the winner");
        else
            view.setText("khichdi pak gyi!");
    }

    @Override
    public void onClick(View v) {
        switch(v.getId()) {
            case R.id.restdialog:
                try {
                    Class c = Class.forName("com.example.myhp.tictacbykanishk.ticsingle");
                    Intent i = new Intent(Dialog1.this, c);
                    startActivity(i);
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }
                break;
            case R.id.dialogexit:
                finishAffinity();
                break;
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        finishAffinity();
    }
}
