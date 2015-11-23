package com.example.myhp.tictacbykanishk;

import android.app.Activity;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;

public class tic extends Activity implements View.OnClickListener {
    int turn = 1;
    Button b1, b2, b3, b4, b5, b6, b7, b8, b9, exit, restart, single;
    char[] ch;
    Intent in;
    Class c;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        int i;
        ch=new char[10];
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tic);
        initialize();
        for (i = 0; i < 9; i++) {
            ch[i] = 'n';
        }
    }

    private void initialize() {
        b1 = (Button) findViewById(R.id.button1);
        b2 = (Button) findViewById(R.id.button2);
        b3 = (Button) findViewById(R.id.button3);
        b4 = (Button) findViewById(R.id.button4);
        b5 = (Button) findViewById(R.id.button5);
        b6 = (Button) findViewById(R.id.button6);
        b7 = (Button) findViewById(R.id.button7);
        b8 = (Button) findViewById(R.id.button8);
        b9 = (Button) findViewById(R.id.button9);
        exit = (Button) findViewById(R.id.exit);
        restart = (Button) findViewById(R.id.rest);
        single = (Button) findViewById(R.id.single);
        b1.setOnClickListener(this);
        b2.setOnClickListener(this);
        b3.setOnClickListener(this);
        b4.setOnClickListener(this);
        b5.setOnClickListener(this);
        b6.setOnClickListener(this);
        b7.setOnClickListener(this);
        b8.setOnClickListener(this);
        b9.setOnClickListener(this);
        exit.setOnClickListener(this);
        restart.setOnClickListener(this);
        single.setOnClickListener(this);

    }


    @Override
    public void onClick(View v) {
        int i,j=0;
    switch(v.getId()) {
        case R.id.button2:
            if (turn % 2 == 1) {
                b2.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[1] = 'x';
                turn++;
            } else {
                b2.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[1] = 'o';
                turn++;
            }
            break;
        case R.id.button3:
            if (turn % 2 == 1) {
                b3.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[2] = 'x';
                turn++;
            } else {
                b3.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[2] = 'o';
                turn++;
            }
            break;
        case R.id.button4:
            if (turn % 2 == 1) {
                b4.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[3] = 'x';
                turn++;
            } else {
                b4.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[3] = 'o';
                turn++;
            }
            break;
        case R.id.button5:
            if (turn % 2 == 1) {
                b5.setBackground(this.getResources().getDrawable(R.drawable.x));

                ch[4] = 'x';
                turn++;
            } else {
                b5.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[4] = 'o';
                turn++;
            }
            break;
        case R.id.button6:
            if (turn % 2 == 1) {
                b6.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[5] = 'x';
                turn++;
            } else {
                b6.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[5] = 'o';
                turn++;
            }
            break;
        case R.id.button7:
            if (turn % 2 == 1) {
                b7.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[6] = 'x';
                turn++;
            } else {
                b7.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[6] = 'o';
                turn++;
            }
            break;
        case R.id.button8:
            if (turn % 2 == 1) {
                b8.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[7] = 'x';
                turn++;
            } else {
                b8.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[7] = 'o';
                turn++;
            }
            break;
        case R.id.button9:
            if (turn % 2 == 1) {
                b9.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[8] = 'x';
                turn++;
            } else {
                b9.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[8] = 'o';
                turn++;
            }
            break;
        case R.id.button1:
            if (turn % 2 == 1) {
                b1.setBackground(this.getResources().getDrawable(R.drawable.x));
                ch[0] = 'x';
                turn++;
            } else {
                b1.setBackground(this.getResources().getDrawable(R.drawable.o));
                ch[0] = 'o';
                turn++;
            }
            break;
        case R.id.exit:
            finishAffinity();
            break;
        case R.id.rest:
            try {
                Class c = Class.forName("com.example.myhp.tictacbykanishk.tic");
                in = new Intent(tic.this, c);
                startActivity(in);
                j=1;
            }
            catch(ClassNotFoundException e){
                e.printStackTrace();
            }
break;
        case R.id.single:
            Class c= null;
            try {
                c = Class.forName("com.example.myhp.tictacbykanishk.ticsingle");
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            in= new Intent(tic.this,c);
            startActivity(in);
            j=1;
            break;
    }
        if(j==0) {
            try {
                c = Class.forName("com.example.myhp.tictacbykanishk.Dialog");
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            Bundle b = new Bundle();
            if (turn % 2 == 0)
                b.putChar("key", 'x');
            else
                b.putChar("key", 'o');


            if (ch[0] == ch[1] && ch[1] == ch[2] && ch[0] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ch[3] == ch[4] && ch[4] == ch[5] && ch[4] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ch[6] == ch[7] && ch[7] == ch[8] && ch[7] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ch[0] == ch[3] && ch[3] == ch[6] && ch[3] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ch[1] == ch[4] && ch[4] == ch[7] && ch[4] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ch[2] == ch[5] && ch[5] == ch[8] && ch[5] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ch[0] == ch[4] && ch[4] == ch[8] && ch[4] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ch[2] == ch[4] && ch[4] == ch[6] && ch[4] != 'n') {
                try {
                    j=1;
                    in = new Intent(tic.this, c);
                    in.putExtras(b);
                    startActivity(in);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }


            if (ch[0] == 'n' || ch[1] == 'n' || ch[2] == 'n' || ch[3] == 'n' || ch[4] == 'n' || ch[5] == 'n' || ch[6] == 'n' || ch[7] == 'n' || ch[8] == 'n');

            else if(j!=1){
                in = new Intent(tic.this, c);
                b = new Bundle();
                b.putChar("key", 'a');
                in.putExtras(b);
                startActivity(in);
            }
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        finishAffinity();
    }
}