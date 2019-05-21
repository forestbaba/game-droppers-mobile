//
//import com.facebook.reacct.bridge.ReactApplicationContext;
//import com.facebook.reacct.bridge.ReactContextBaseJavaModule;
//import com.facebook.reacct.bridge.ReactMethod;
//
//
//public class ToastModule extends ReactContextBaseJavaModule{
//
//    public ToastModule(ReactApplicationContext context){
//        super(context);
//    }
//    @Override
//    public String getName(){
//        return "ToastModule ";
//    }
//
//    @ReactMethod
//    public void showText(String message, int duration){
//        android.widget.Toast.makeText(getReactApplicationContext, message,duration).show();
//    }
//
//}