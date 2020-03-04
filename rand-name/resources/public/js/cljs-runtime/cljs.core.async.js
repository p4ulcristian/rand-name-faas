goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24387 = arguments.length;
switch (G__24387) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24389 = (function (f,blockable,meta24390){
this.f = f;
this.blockable = blockable;
this.meta24390 = meta24390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24391,meta24390__$1){
var self__ = this;
var _24391__$1 = this;
return (new cljs.core.async.t_cljs$core$async24389(self__.f,self__.blockable,meta24390__$1));
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24391){
var self__ = this;
var _24391__$1 = this;
return self__.meta24390;
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24390","meta24390",1573897092,null)], null);
});

cljs.core.async.t_cljs$core$async24389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24389";

cljs.core.async.t_cljs$core$async24389.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async24389");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24389.
 */
cljs.core.async.__GT_t_cljs$core$async24389 = (function cljs$core$async$__GT_t_cljs$core$async24389(f__$1,blockable__$1,meta24390){
return (new cljs.core.async.t_cljs$core$async24389(f__$1,blockable__$1,meta24390));
});

}

return (new cljs.core.async.t_cljs$core$async24389(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24405 = arguments.length;
switch (G__24405) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24408 = arguments.length;
switch (G__24408) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24413 = arguments.length;
switch (G__24413) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_26652 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26652) : fn1.call(null,val_26652));
} else {
cljs.core.async.impl.dispatch.run(((function (val_26652,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26652) : fn1.call(null,val_26652));
});})(val_26652,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24421 = arguments.length;
switch (G__24421) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___26654 = n;
var x_26655 = (0);
while(true){
if((x_26655 < n__4607__auto___26654)){
(a[x_26655] = (0));

var G__26657 = (x_26655 + (1));
x_26655 = G__26657;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__26658 = (i + (1));
i = G__26658;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24426 = (function (flag,meta24427){
this.flag = flag;
this.meta24427 = meta24427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24428,meta24427__$1){
var self__ = this;
var _24428__$1 = this;
return (new cljs.core.async.t_cljs$core$async24426(self__.flag,meta24427__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24428){
var self__ = this;
var _24428__$1 = this;
return self__.meta24427;
});})(flag))
;

cljs.core.async.t_cljs$core$async24426.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24426.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24427","meta24427",-377380899,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24426";

cljs.core.async.t_cljs$core$async24426.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async24426");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24426.
 */
cljs.core.async.__GT_t_cljs$core$async24426 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24426(flag__$1,meta24427){
return (new cljs.core.async.t_cljs$core$async24426(flag__$1,meta24427));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24426(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24433 = (function (flag,cb,meta24434){
this.flag = flag;
this.cb = cb;
this.meta24434 = meta24434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24435,meta24434__$1){
var self__ = this;
var _24435__$1 = this;
return (new cljs.core.async.t_cljs$core$async24433(self__.flag,self__.cb,meta24434__$1));
});

cljs.core.async.t_cljs$core$async24433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24435){
var self__ = this;
var _24435__$1 = this;
return self__.meta24434;
});

cljs.core.async.t_cljs$core$async24433.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async24433.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24434","meta24434",-1295109048,null)], null);
});

cljs.core.async.t_cljs$core$async24433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24433";

cljs.core.async.t_cljs$core$async24433.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async24433");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24433.
 */
cljs.core.async.__GT_t_cljs$core$async24433 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24433(flag__$1,cb__$1,meta24434){
return (new cljs.core.async.t_cljs$core$async24433(flag__$1,cb__$1,meta24434));
});

}

return (new cljs.core.async.t_cljs$core$async24433(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24436_SHARP_){
var G__24441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24436_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24441) : fret.call(null,G__24441));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24437_SHARP_){
var G__24442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24437_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24442) : fret.call(null,G__24442));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26672 = (i + (1));
i = G__26672;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26675 = arguments.length;
var i__4731__auto___26676 = (0);
while(true){
if((i__4731__auto___26676 < len__4730__auto___26675)){
args__4736__auto__.push((arguments[i__4731__auto___26676]));

var G__26677 = (i__4731__auto___26676 + (1));
i__4731__auto___26676 = G__26677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24451){
var map__24452 = p__24451;
var map__24452__$1 = (((((!((map__24452 == null))))?(((((map__24452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24452):map__24452);
var opts = map__24452__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24444){
var G__24445 = cljs.core.first(seq24444);
var seq24444__$1 = cljs.core.next(seq24444);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24445,seq24444__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24464 = arguments.length;
switch (G__24464) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24320__auto___26684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___26684){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___26684){
return (function (state_24498){
var state_val_24499 = (state_24498[(1)]);
if((state_val_24499 === (7))){
var inst_24490 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24503_26685 = state_24498__$1;
(statearr_24503_26685[(2)] = inst_24490);

(statearr_24503_26685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (1))){
var state_24498__$1 = state_24498;
var statearr_24505_26687 = state_24498__$1;
(statearr_24505_26687[(2)] = null);

(statearr_24505_26687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (4))){
var inst_24473 = (state_24498[(7)]);
var inst_24473__$1 = (state_24498[(2)]);
var inst_24474 = (inst_24473__$1 == null);
var state_24498__$1 = (function (){var statearr_24506 = state_24498;
(statearr_24506[(7)] = inst_24473__$1);

return statearr_24506;
})();
if(cljs.core.truth_(inst_24474)){
var statearr_24507_26688 = state_24498__$1;
(statearr_24507_26688[(1)] = (5));

} else {
var statearr_24508_26689 = state_24498__$1;
(statearr_24508_26689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (13))){
var state_24498__$1 = state_24498;
var statearr_24511_26690 = state_24498__$1;
(statearr_24511_26690[(2)] = null);

(statearr_24511_26690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (6))){
var inst_24473 = (state_24498[(7)]);
var state_24498__$1 = state_24498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24498__$1,(11),to,inst_24473);
} else {
if((state_val_24499 === (3))){
var inst_24492 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24498__$1,inst_24492);
} else {
if((state_val_24499 === (12))){
var state_24498__$1 = state_24498;
var statearr_24512_26691 = state_24498__$1;
(statearr_24512_26691[(2)] = null);

(statearr_24512_26691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (2))){
var state_24498__$1 = state_24498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24498__$1,(4),from);
} else {
if((state_val_24499 === (11))){
var inst_24483 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
if(cljs.core.truth_(inst_24483)){
var statearr_24513_26692 = state_24498__$1;
(statearr_24513_26692[(1)] = (12));

} else {
var statearr_24514_26693 = state_24498__$1;
(statearr_24514_26693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (9))){
var state_24498__$1 = state_24498;
var statearr_24515_26697 = state_24498__$1;
(statearr_24515_26697[(2)] = null);

(statearr_24515_26697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (5))){
var state_24498__$1 = state_24498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24516_26702 = state_24498__$1;
(statearr_24516_26702[(1)] = (8));

} else {
var statearr_24518_26703 = state_24498__$1;
(statearr_24518_26703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (14))){
var inst_24488 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24519_26704 = state_24498__$1;
(statearr_24519_26704[(2)] = inst_24488);

(statearr_24519_26704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (10))){
var inst_24480 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24521_26707 = state_24498__$1;
(statearr_24521_26707[(2)] = inst_24480);

(statearr_24521_26707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (8))){
var inst_24477 = cljs.core.async.close_BANG_(to);
var state_24498__$1 = state_24498;
var statearr_24522_26709 = state_24498__$1;
(statearr_24522_26709[(2)] = inst_24477);

(statearr_24522_26709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___26684))
;
return ((function (switch__24064__auto__,c__24320__auto___26684){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_24523 = [null,null,null,null,null,null,null,null];
(statearr_24523[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_24523[(1)] = (1));

return statearr_24523;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_24498){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24498);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24524){if((e24524 instanceof Object)){
var ex__24068__auto__ = e24524;
var statearr_24525_26714 = state_24498;
(statearr_24525_26714[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26715 = state_24498;
state_24498 = G__26715;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_24498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_24498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___26684))
})();
var state__24322__auto__ = (function (){var statearr_24526 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24526[(6)] = c__24320__auto___26684);

return statearr_24526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___26684))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__24531){
var vec__24538 = p__24531;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,(1),null);
var job = vec__24538;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24320__auto___26716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___26716,res,vec__24538,v,p,job,jobs,results){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___26716,res,vec__24538,v,p,job,jobs,results){
return (function (state_24548){
var state_val_24549 = (state_24548[(1)]);
if((state_val_24549 === (1))){
var state_24548__$1 = state_24548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24548__$1,(2),res,v);
} else {
if((state_val_24549 === (2))){
var inst_24542 = (state_24548[(2)]);
var inst_24546 = cljs.core.async.close_BANG_(res);
var state_24548__$1 = (function (){var statearr_24555 = state_24548;
(statearr_24555[(7)] = inst_24542);

return statearr_24555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24548__$1,inst_24546);
} else {
return null;
}
}
});})(c__24320__auto___26716,res,vec__24538,v,p,job,jobs,results))
;
return ((function (switch__24064__auto__,c__24320__auto___26716,res,vec__24538,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0 = (function (){
var statearr_24557 = [null,null,null,null,null,null,null,null];
(statearr_24557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__);

(statearr_24557[(1)] = (1));

return statearr_24557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1 = (function (state_24548){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24548);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24561){if((e24561 instanceof Object)){
var ex__24068__auto__ = e24561;
var statearr_24562_26717 = state_24548;
(statearr_24562_26717[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26718 = state_24548;
state_24548 = G__26718;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = function(state_24548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1.call(this,state_24548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___26716,res,vec__24538,v,p,job,jobs,results))
})();
var state__24322__auto__ = (function (){var statearr_24566 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24566[(6)] = c__24320__auto___26716);

return statearr_24566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___26716,res,vec__24538,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24567){
var vec__24568 = p__24567;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24568,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24568,(1),null);
var job = vec__24568;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___26721 = n;
var __26722 = (0);
while(true){
if((__26722 < n__4607__auto___26721)){
var G__24571_26723 = type;
var G__24571_26724__$1 = (((G__24571_26723 instanceof cljs.core.Keyword))?G__24571_26723.fqn:null);
switch (G__24571_26724__$1) {
case "compute":
var c__24320__auto___26726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26722,c__24320__auto___26726,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (__26722,c__24320__auto___26726,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async){
return (function (state_24584){
var state_val_24585 = (state_24584[(1)]);
if((state_val_24585 === (1))){
var state_24584__$1 = state_24584;
var statearr_24586_26727 = state_24584__$1;
(statearr_24586_26727[(2)] = null);

(statearr_24586_26727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24585 === (2))){
var state_24584__$1 = state_24584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24584__$1,(4),jobs);
} else {
if((state_val_24585 === (3))){
var inst_24582 = (state_24584[(2)]);
var state_24584__$1 = state_24584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24584__$1,inst_24582);
} else {
if((state_val_24585 === (4))){
var inst_24574 = (state_24584[(2)]);
var inst_24575 = process(inst_24574);
var state_24584__$1 = state_24584;
if(cljs.core.truth_(inst_24575)){
var statearr_24590_26728 = state_24584__$1;
(statearr_24590_26728[(1)] = (5));

} else {
var statearr_24591_26729 = state_24584__$1;
(statearr_24591_26729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24585 === (5))){
var state_24584__$1 = state_24584;
var statearr_24592_26730 = state_24584__$1;
(statearr_24592_26730[(2)] = null);

(statearr_24592_26730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24585 === (6))){
var state_24584__$1 = state_24584;
var statearr_24593_26731 = state_24584__$1;
(statearr_24593_26731[(2)] = null);

(statearr_24593_26731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24585 === (7))){
var inst_24580 = (state_24584[(2)]);
var state_24584__$1 = state_24584;
var statearr_24597_26735 = state_24584__$1;
(statearr_24597_26735[(2)] = inst_24580);

(statearr_24597_26735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26722,c__24320__auto___26726,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async))
;
return ((function (__26722,switch__24064__auto__,c__24320__auto___26726,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0 = (function (){
var statearr_24598 = [null,null,null,null,null,null,null];
(statearr_24598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__);

(statearr_24598[(1)] = (1));

return statearr_24598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1 = (function (state_24584){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24584);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24601){if((e24601 instanceof Object)){
var ex__24068__auto__ = e24601;
var statearr_24603_26737 = state_24584;
(statearr_24603_26737[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26738 = state_24584;
state_24584 = G__26738;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = function(state_24584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1.call(this,state_24584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__;
})()
;})(__26722,switch__24064__auto__,c__24320__auto___26726,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async))
})();
var state__24322__auto__ = (function (){var statearr_24604 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24604[(6)] = c__24320__auto___26726);

return statearr_24604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(__26722,c__24320__auto___26726,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async))
);


break;
case "async":
var c__24320__auto___26739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26722,c__24320__auto___26739,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (__26722,c__24320__auto___26739,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async){
return (function (state_24619){
var state_val_24620 = (state_24619[(1)]);
if((state_val_24620 === (1))){
var state_24619__$1 = state_24619;
var statearr_24622_26741 = state_24619__$1;
(statearr_24622_26741[(2)] = null);

(statearr_24622_26741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (2))){
var state_24619__$1 = state_24619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24619__$1,(4),jobs);
} else {
if((state_val_24620 === (3))){
var inst_24617 = (state_24619[(2)]);
var state_24619__$1 = state_24619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24619__$1,inst_24617);
} else {
if((state_val_24620 === (4))){
var inst_24607 = (state_24619[(2)]);
var inst_24608 = async(inst_24607);
var state_24619__$1 = state_24619;
if(cljs.core.truth_(inst_24608)){
var statearr_24627_26743 = state_24619__$1;
(statearr_24627_26743[(1)] = (5));

} else {
var statearr_24628_26744 = state_24619__$1;
(statearr_24628_26744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (5))){
var state_24619__$1 = state_24619;
var statearr_24629_26745 = state_24619__$1;
(statearr_24629_26745[(2)] = null);

(statearr_24629_26745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (6))){
var state_24619__$1 = state_24619;
var statearr_24632_26746 = state_24619__$1;
(statearr_24632_26746[(2)] = null);

(statearr_24632_26746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (7))){
var inst_24615 = (state_24619[(2)]);
var state_24619__$1 = state_24619;
var statearr_24634_26747 = state_24619__$1;
(statearr_24634_26747[(2)] = inst_24615);

(statearr_24634_26747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26722,c__24320__auto___26739,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async))
;
return ((function (__26722,switch__24064__auto__,c__24320__auto___26739,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0 = (function (){
var statearr_24640 = [null,null,null,null,null,null,null];
(statearr_24640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__);

(statearr_24640[(1)] = (1));

return statearr_24640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1 = (function (state_24619){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24619);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24642){if((e24642 instanceof Object)){
var ex__24068__auto__ = e24642;
var statearr_24643_26749 = state_24619;
(statearr_24643_26749[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26750 = state_24619;
state_24619 = G__26750;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = function(state_24619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1.call(this,state_24619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__;
})()
;})(__26722,switch__24064__auto__,c__24320__auto___26739,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async))
})();
var state__24322__auto__ = (function (){var statearr_24644 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24644[(6)] = c__24320__auto___26739);

return statearr_24644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(__26722,c__24320__auto___26739,G__24571_26723,G__24571_26724__$1,n__4607__auto___26721,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24571_26724__$1)].join('')));

}

var G__26752 = (__26722 + (1));
__26722 = G__26752;
continue;
} else {
}
break;
}

var c__24320__auto___26753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___26753,jobs,results,process,async){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___26753,jobs,results,process,async){
return (function (state_24666){
var state_val_24667 = (state_24666[(1)]);
if((state_val_24667 === (7))){
var inst_24662 = (state_24666[(2)]);
var state_24666__$1 = state_24666;
var statearr_24673_26754 = state_24666__$1;
(statearr_24673_26754[(2)] = inst_24662);

(statearr_24673_26754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (1))){
var state_24666__$1 = state_24666;
var statearr_24674_26755 = state_24666__$1;
(statearr_24674_26755[(2)] = null);

(statearr_24674_26755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (4))){
var inst_24647 = (state_24666[(7)]);
var inst_24647__$1 = (state_24666[(2)]);
var inst_24648 = (inst_24647__$1 == null);
var state_24666__$1 = (function (){var statearr_24679 = state_24666;
(statearr_24679[(7)] = inst_24647__$1);

return statearr_24679;
})();
if(cljs.core.truth_(inst_24648)){
var statearr_24680_26756 = state_24666__$1;
(statearr_24680_26756[(1)] = (5));

} else {
var statearr_24681_26757 = state_24666__$1;
(statearr_24681_26757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (6))){
var inst_24647 = (state_24666[(7)]);
var inst_24652 = (state_24666[(8)]);
var inst_24652__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24654 = [inst_24647,inst_24652__$1];
var inst_24655 = (new cljs.core.PersistentVector(null,2,(5),inst_24653,inst_24654,null));
var state_24666__$1 = (function (){var statearr_24682 = state_24666;
(statearr_24682[(8)] = inst_24652__$1);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24666__$1,(8),jobs,inst_24655);
} else {
if((state_val_24667 === (3))){
var inst_24664 = (state_24666[(2)]);
var state_24666__$1 = state_24666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24666__$1,inst_24664);
} else {
if((state_val_24667 === (2))){
var state_24666__$1 = state_24666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24666__$1,(4),from);
} else {
if((state_val_24667 === (9))){
var inst_24659 = (state_24666[(2)]);
var state_24666__$1 = (function (){var statearr_24683 = state_24666;
(statearr_24683[(9)] = inst_24659);

return statearr_24683;
})();
var statearr_24684_26758 = state_24666__$1;
(statearr_24684_26758[(2)] = null);

(statearr_24684_26758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (5))){
var inst_24650 = cljs.core.async.close_BANG_(jobs);
var state_24666__$1 = state_24666;
var statearr_24685_26760 = state_24666__$1;
(statearr_24685_26760[(2)] = inst_24650);

(statearr_24685_26760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (8))){
var inst_24652 = (state_24666[(8)]);
var inst_24657 = (state_24666[(2)]);
var state_24666__$1 = (function (){var statearr_24686 = state_24666;
(statearr_24686[(10)] = inst_24657);

return statearr_24686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24666__$1,(9),results,inst_24652);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___26753,jobs,results,process,async))
;
return ((function (switch__24064__auto__,c__24320__auto___26753,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0 = (function (){
var statearr_24687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__);

(statearr_24687[(1)] = (1));

return statearr_24687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1 = (function (state_24666){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24666);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24688){if((e24688 instanceof Object)){
var ex__24068__auto__ = e24688;
var statearr_24689_26761 = state_24666;
(statearr_24689_26761[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26762 = state_24666;
state_24666 = G__26762;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = function(state_24666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1.call(this,state_24666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___26753,jobs,results,process,async))
})();
var state__24322__auto__ = (function (){var statearr_24692 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24692[(6)] = c__24320__auto___26753);

return statearr_24692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___26753,jobs,results,process,async))
);


var c__24320__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto__,jobs,results,process,async){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto__,jobs,results,process,async){
return (function (state_24731){
var state_val_24732 = (state_24731[(1)]);
if((state_val_24732 === (7))){
var inst_24727 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
var statearr_24733_26764 = state_24731__$1;
(statearr_24733_26764[(2)] = inst_24727);

(statearr_24733_26764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (20))){
var state_24731__$1 = state_24731;
var statearr_24737_26766 = state_24731__$1;
(statearr_24737_26766[(2)] = null);

(statearr_24737_26766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (1))){
var state_24731__$1 = state_24731;
var statearr_24738_26769 = state_24731__$1;
(statearr_24738_26769[(2)] = null);

(statearr_24738_26769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (4))){
var inst_24696 = (state_24731[(7)]);
var inst_24696__$1 = (state_24731[(2)]);
var inst_24697 = (inst_24696__$1 == null);
var state_24731__$1 = (function (){var statearr_24739 = state_24731;
(statearr_24739[(7)] = inst_24696__$1);

return statearr_24739;
})();
if(cljs.core.truth_(inst_24697)){
var statearr_24741_26771 = state_24731__$1;
(statearr_24741_26771[(1)] = (5));

} else {
var statearr_24742_26772 = state_24731__$1;
(statearr_24742_26772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (15))){
var inst_24709 = (state_24731[(8)]);
var state_24731__$1 = state_24731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24731__$1,(18),to,inst_24709);
} else {
if((state_val_24732 === (21))){
var inst_24722 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
var statearr_24744_26773 = state_24731__$1;
(statearr_24744_26773[(2)] = inst_24722);

(statearr_24744_26773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (13))){
var inst_24724 = (state_24731[(2)]);
var state_24731__$1 = (function (){var statearr_24746 = state_24731;
(statearr_24746[(9)] = inst_24724);

return statearr_24746;
})();
var statearr_24748_26775 = state_24731__$1;
(statearr_24748_26775[(2)] = null);

(statearr_24748_26775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (6))){
var inst_24696 = (state_24731[(7)]);
var state_24731__$1 = state_24731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24731__$1,(11),inst_24696);
} else {
if((state_val_24732 === (17))){
var inst_24717 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
if(cljs.core.truth_(inst_24717)){
var statearr_24752_26778 = state_24731__$1;
(statearr_24752_26778[(1)] = (19));

} else {
var statearr_24753_26779 = state_24731__$1;
(statearr_24753_26779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (3))){
var inst_24729 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24731__$1,inst_24729);
} else {
if((state_val_24732 === (12))){
var inst_24706 = (state_24731[(10)]);
var state_24731__$1 = state_24731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24731__$1,(14),inst_24706);
} else {
if((state_val_24732 === (2))){
var state_24731__$1 = state_24731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24731__$1,(4),results);
} else {
if((state_val_24732 === (19))){
var state_24731__$1 = state_24731;
var statearr_24754_26783 = state_24731__$1;
(statearr_24754_26783[(2)] = null);

(statearr_24754_26783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (11))){
var inst_24706 = (state_24731[(2)]);
var state_24731__$1 = (function (){var statearr_24757 = state_24731;
(statearr_24757[(10)] = inst_24706);

return statearr_24757;
})();
var statearr_24759_26784 = state_24731__$1;
(statearr_24759_26784[(2)] = null);

(statearr_24759_26784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (9))){
var state_24731__$1 = state_24731;
var statearr_24761_26785 = state_24731__$1;
(statearr_24761_26785[(2)] = null);

(statearr_24761_26785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (5))){
var state_24731__$1 = state_24731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24762_26786 = state_24731__$1;
(statearr_24762_26786[(1)] = (8));

} else {
var statearr_24763_26787 = state_24731__$1;
(statearr_24763_26787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (14))){
var inst_24711 = (state_24731[(11)]);
var inst_24709 = (state_24731[(8)]);
var inst_24709__$1 = (state_24731[(2)]);
var inst_24710 = (inst_24709__$1 == null);
var inst_24711__$1 = cljs.core.not(inst_24710);
var state_24731__$1 = (function (){var statearr_24765 = state_24731;
(statearr_24765[(11)] = inst_24711__$1);

(statearr_24765[(8)] = inst_24709__$1);

return statearr_24765;
})();
if(inst_24711__$1){
var statearr_24768_26789 = state_24731__$1;
(statearr_24768_26789[(1)] = (15));

} else {
var statearr_24769_26791 = state_24731__$1;
(statearr_24769_26791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (16))){
var inst_24711 = (state_24731[(11)]);
var state_24731__$1 = state_24731;
var statearr_24770_26793 = state_24731__$1;
(statearr_24770_26793[(2)] = inst_24711);

(statearr_24770_26793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (10))){
var inst_24703 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
var statearr_24776_26796 = state_24731__$1;
(statearr_24776_26796[(2)] = inst_24703);

(statearr_24776_26796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (18))){
var inst_24714 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
var statearr_24780_26798 = state_24731__$1;
(statearr_24780_26798[(2)] = inst_24714);

(statearr_24780_26798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (8))){
var inst_24700 = cljs.core.async.close_BANG_(to);
var state_24731__$1 = state_24731;
var statearr_24783_26799 = state_24731__$1;
(statearr_24783_26799[(2)] = inst_24700);

(statearr_24783_26799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto__,jobs,results,process,async))
;
return ((function (switch__24064__auto__,c__24320__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0 = (function (){
var statearr_24784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__);

(statearr_24784[(1)] = (1));

return statearr_24784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1 = (function (state_24731){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24731);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24787){if((e24787 instanceof Object)){
var ex__24068__auto__ = e24787;
var statearr_24790_26800 = state_24731;
(statearr_24790_26800[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26801 = state_24731;
state_24731 = G__26801;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__ = function(state_24731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1.call(this,state_24731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto__,jobs,results,process,async))
})();
var state__24322__auto__ = (function (){var statearr_24793 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24793[(6)] = c__24320__auto__);

return statearr_24793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto__,jobs,results,process,async))
);

return c__24320__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24796 = arguments.length;
switch (G__24796) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24805 = arguments.length;
switch (G__24805) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24807 = arguments.length;
switch (G__24807) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24320__auto___26814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___26814,tc,fc){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___26814,tc,fc){
return (function (state_24835){
var state_val_24836 = (state_24835[(1)]);
if((state_val_24836 === (7))){
var inst_24831 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
var statearr_24838_26817 = state_24835__$1;
(statearr_24838_26817[(2)] = inst_24831);

(statearr_24838_26817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (1))){
var state_24835__$1 = state_24835;
var statearr_24839_26818 = state_24835__$1;
(statearr_24839_26818[(2)] = null);

(statearr_24839_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (4))){
var inst_24812 = (state_24835[(7)]);
var inst_24812__$1 = (state_24835[(2)]);
var inst_24813 = (inst_24812__$1 == null);
var state_24835__$1 = (function (){var statearr_24840 = state_24835;
(statearr_24840[(7)] = inst_24812__$1);

return statearr_24840;
})();
if(cljs.core.truth_(inst_24813)){
var statearr_24841_26819 = state_24835__$1;
(statearr_24841_26819[(1)] = (5));

} else {
var statearr_24842_26820 = state_24835__$1;
(statearr_24842_26820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (13))){
var state_24835__$1 = state_24835;
var statearr_24843_26822 = state_24835__$1;
(statearr_24843_26822[(2)] = null);

(statearr_24843_26822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (6))){
var inst_24812 = (state_24835[(7)]);
var inst_24818 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24812) : p.call(null,inst_24812));
var state_24835__$1 = state_24835;
if(cljs.core.truth_(inst_24818)){
var statearr_24844_26824 = state_24835__$1;
(statearr_24844_26824[(1)] = (9));

} else {
var statearr_24845_26825 = state_24835__$1;
(statearr_24845_26825[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (3))){
var inst_24833 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24835__$1,inst_24833);
} else {
if((state_val_24836 === (12))){
var state_24835__$1 = state_24835;
var statearr_24846_26828 = state_24835__$1;
(statearr_24846_26828[(2)] = null);

(statearr_24846_26828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (2))){
var state_24835__$1 = state_24835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24835__$1,(4),ch);
} else {
if((state_val_24836 === (11))){
var inst_24812 = (state_24835[(7)]);
var inst_24822 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24835__$1,(8),inst_24822,inst_24812);
} else {
if((state_val_24836 === (9))){
var state_24835__$1 = state_24835;
var statearr_24847_26830 = state_24835__$1;
(statearr_24847_26830[(2)] = tc);

(statearr_24847_26830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (5))){
var inst_24815 = cljs.core.async.close_BANG_(tc);
var inst_24816 = cljs.core.async.close_BANG_(fc);
var state_24835__$1 = (function (){var statearr_24849 = state_24835;
(statearr_24849[(8)] = inst_24815);

return statearr_24849;
})();
var statearr_24850_26831 = state_24835__$1;
(statearr_24850_26831[(2)] = inst_24816);

(statearr_24850_26831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (14))){
var inst_24829 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
var statearr_24852_26832 = state_24835__$1;
(statearr_24852_26832[(2)] = inst_24829);

(statearr_24852_26832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (10))){
var state_24835__$1 = state_24835;
var statearr_24853_26833 = state_24835__$1;
(statearr_24853_26833[(2)] = fc);

(statearr_24853_26833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24836 === (8))){
var inst_24824 = (state_24835[(2)]);
var state_24835__$1 = state_24835;
if(cljs.core.truth_(inst_24824)){
var statearr_24854_26834 = state_24835__$1;
(statearr_24854_26834[(1)] = (12));

} else {
var statearr_24855_26835 = state_24835__$1;
(statearr_24855_26835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___26814,tc,fc))
;
return ((function (switch__24064__auto__,c__24320__auto___26814,tc,fc){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_24856 = [null,null,null,null,null,null,null,null,null];
(statearr_24856[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_24856[(1)] = (1));

return statearr_24856;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_24835){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24835);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24857){if((e24857 instanceof Object)){
var ex__24068__auto__ = e24857;
var statearr_24858_26836 = state_24835;
(statearr_24858_26836[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26837 = state_24835;
state_24835 = G__26837;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_24835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_24835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___26814,tc,fc))
})();
var state__24322__auto__ = (function (){var statearr_24859 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24859[(6)] = c__24320__auto___26814);

return statearr_24859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___26814,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24320__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto__){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto__){
return (function (state_24883){
var state_val_24884 = (state_24883[(1)]);
if((state_val_24884 === (7))){
var inst_24879 = (state_24883[(2)]);
var state_24883__$1 = state_24883;
var statearr_24888_26838 = state_24883__$1;
(statearr_24888_26838[(2)] = inst_24879);

(statearr_24888_26838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (1))){
var inst_24860 = init;
var state_24883__$1 = (function (){var statearr_24889 = state_24883;
(statearr_24889[(7)] = inst_24860);

return statearr_24889;
})();
var statearr_24890_26839 = state_24883__$1;
(statearr_24890_26839[(2)] = null);

(statearr_24890_26839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (4))){
var inst_24866 = (state_24883[(8)]);
var inst_24866__$1 = (state_24883[(2)]);
var inst_24867 = (inst_24866__$1 == null);
var state_24883__$1 = (function (){var statearr_24893 = state_24883;
(statearr_24893[(8)] = inst_24866__$1);

return statearr_24893;
})();
if(cljs.core.truth_(inst_24867)){
var statearr_24894_26843 = state_24883__$1;
(statearr_24894_26843[(1)] = (5));

} else {
var statearr_24895_26844 = state_24883__$1;
(statearr_24895_26844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (6))){
var inst_24866 = (state_24883[(8)]);
var inst_24870 = (state_24883[(9)]);
var inst_24860 = (state_24883[(7)]);
var inst_24870__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24860,inst_24866) : f.call(null,inst_24860,inst_24866));
var inst_24871 = cljs.core.reduced_QMARK_(inst_24870__$1);
var state_24883__$1 = (function (){var statearr_24896 = state_24883;
(statearr_24896[(9)] = inst_24870__$1);

return statearr_24896;
})();
if(inst_24871){
var statearr_24897_26850 = state_24883__$1;
(statearr_24897_26850[(1)] = (8));

} else {
var statearr_24898_26851 = state_24883__$1;
(statearr_24898_26851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (3))){
var inst_24881 = (state_24883[(2)]);
var state_24883__$1 = state_24883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24883__$1,inst_24881);
} else {
if((state_val_24884 === (2))){
var state_24883__$1 = state_24883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24883__$1,(4),ch);
} else {
if((state_val_24884 === (9))){
var inst_24870 = (state_24883[(9)]);
var inst_24860 = inst_24870;
var state_24883__$1 = (function (){var statearr_24905 = state_24883;
(statearr_24905[(7)] = inst_24860);

return statearr_24905;
})();
var statearr_24906_26854 = state_24883__$1;
(statearr_24906_26854[(2)] = null);

(statearr_24906_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (5))){
var inst_24860 = (state_24883[(7)]);
var state_24883__$1 = state_24883;
var statearr_24907_26858 = state_24883__$1;
(statearr_24907_26858[(2)] = inst_24860);

(statearr_24907_26858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (10))){
var inst_24877 = (state_24883[(2)]);
var state_24883__$1 = state_24883;
var statearr_24908_26859 = state_24883__$1;
(statearr_24908_26859[(2)] = inst_24877);

(statearr_24908_26859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (8))){
var inst_24870 = (state_24883[(9)]);
var inst_24873 = cljs.core.deref(inst_24870);
var state_24883__$1 = state_24883;
var statearr_24919_26860 = state_24883__$1;
(statearr_24919_26860[(2)] = inst_24873);

(statearr_24919_26860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto__))
;
return ((function (switch__24064__auto__,c__24320__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24065__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24065__auto____0 = (function (){
var statearr_24924 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24924[(0)] = cljs$core$async$reduce_$_state_machine__24065__auto__);

(statearr_24924[(1)] = (1));

return statearr_24924;
});
var cljs$core$async$reduce_$_state_machine__24065__auto____1 = (function (state_24883){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24883);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24929){if((e24929 instanceof Object)){
var ex__24068__auto__ = e24929;
var statearr_24930_26873 = state_24883;
(statearr_24930_26873[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26874 = state_24883;
state_24883 = G__26874;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24065__auto__ = function(state_24883){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24065__auto____1.call(this,state_24883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24065__auto____0;
cljs$core$async$reduce_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24065__auto____1;
return cljs$core$async$reduce_$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto__))
})();
var state__24322__auto__ = (function (){var statearr_24931 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24931[(6)] = c__24320__auto__);

return statearr_24931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto__))
);

return c__24320__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24320__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto__,f__$1){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto__,f__$1){
return (function (state_24945){
var state_val_24946 = (state_24945[(1)]);
if((state_val_24946 === (1))){
var inst_24940 = cljs.core.async.reduce(f__$1,init,ch);
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24945__$1,(2),inst_24940);
} else {
if((state_val_24946 === (2))){
var inst_24942 = (state_24945[(2)]);
var inst_24943 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24942) : f__$1.call(null,inst_24942));
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24945__$1,inst_24943);
} else {
return null;
}
}
});})(c__24320__auto__,f__$1))
;
return ((function (switch__24064__auto__,c__24320__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24065__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24065__auto____0 = (function (){
var statearr_24948 = [null,null,null,null,null,null,null];
(statearr_24948[(0)] = cljs$core$async$transduce_$_state_machine__24065__auto__);

(statearr_24948[(1)] = (1));

return statearr_24948;
});
var cljs$core$async$transduce_$_state_machine__24065__auto____1 = (function (state_24945){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24945);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e24950){if((e24950 instanceof Object)){
var ex__24068__auto__ = e24950;
var statearr_24951_26878 = state_24945;
(statearr_24951_26878[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26879 = state_24945;
state_24945 = G__26879;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24065__auto__ = function(state_24945){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24065__auto____1.call(this,state_24945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24065__auto____0;
cljs$core$async$transduce_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24065__auto____1;
return cljs$core$async$transduce_$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto__,f__$1))
})();
var state__24322__auto__ = (function (){var statearr_24953 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_24953[(6)] = c__24320__auto__);

return statearr_24953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto__,f__$1))
);

return c__24320__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24956 = arguments.length;
switch (G__24956) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24320__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto__){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto__){
return (function (state_24987){
var state_val_24988 = (state_24987[(1)]);
if((state_val_24988 === (7))){
var inst_24967 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_24990_26881 = state_24987__$1;
(statearr_24990_26881[(2)] = inst_24967);

(statearr_24990_26881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (1))){
var inst_24961 = cljs.core.seq(coll);
var inst_24962 = inst_24961;
var state_24987__$1 = (function (){var statearr_24991 = state_24987;
(statearr_24991[(7)] = inst_24962);

return statearr_24991;
})();
var statearr_24995_26882 = state_24987__$1;
(statearr_24995_26882[(2)] = null);

(statearr_24995_26882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (4))){
var inst_24962 = (state_24987[(7)]);
var inst_24965 = cljs.core.first(inst_24962);
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24987__$1,(7),ch,inst_24965);
} else {
if((state_val_24988 === (13))){
var inst_24980 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_24998_26884 = state_24987__$1;
(statearr_24998_26884[(2)] = inst_24980);

(statearr_24998_26884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (6))){
var inst_24970 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
if(cljs.core.truth_(inst_24970)){
var statearr_25000_26885 = state_24987__$1;
(statearr_25000_26885[(1)] = (8));

} else {
var statearr_25004_26886 = state_24987__$1;
(statearr_25004_26886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (3))){
var inst_24984 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24987__$1,inst_24984);
} else {
if((state_val_24988 === (12))){
var state_24987__$1 = state_24987;
var statearr_25006_26887 = state_24987__$1;
(statearr_25006_26887[(2)] = null);

(statearr_25006_26887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (2))){
var inst_24962 = (state_24987[(7)]);
var state_24987__$1 = state_24987;
if(cljs.core.truth_(inst_24962)){
var statearr_25007_26888 = state_24987__$1;
(statearr_25007_26888[(1)] = (4));

} else {
var statearr_25008_26889 = state_24987__$1;
(statearr_25008_26889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (11))){
var inst_24977 = cljs.core.async.close_BANG_(ch);
var state_24987__$1 = state_24987;
var statearr_25009_26890 = state_24987__$1;
(statearr_25009_26890[(2)] = inst_24977);

(statearr_25009_26890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (9))){
var state_24987__$1 = state_24987;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25010_26891 = state_24987__$1;
(statearr_25010_26891[(1)] = (11));

} else {
var statearr_25011_26892 = state_24987__$1;
(statearr_25011_26892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (5))){
var inst_24962 = (state_24987[(7)]);
var state_24987__$1 = state_24987;
var statearr_25016_26893 = state_24987__$1;
(statearr_25016_26893[(2)] = inst_24962);

(statearr_25016_26893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (10))){
var inst_24982 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_25018_26894 = state_24987__$1;
(statearr_25018_26894[(2)] = inst_24982);

(statearr_25018_26894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24988 === (8))){
var inst_24962 = (state_24987[(7)]);
var inst_24972 = cljs.core.next(inst_24962);
var inst_24962__$1 = inst_24972;
var state_24987__$1 = (function (){var statearr_25023 = state_24987;
(statearr_25023[(7)] = inst_24962__$1);

return statearr_25023;
})();
var statearr_25024_26895 = state_24987__$1;
(statearr_25024_26895[(2)] = null);

(statearr_25024_26895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto__))
;
return ((function (switch__24064__auto__,c__24320__auto__){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_25027 = [null,null,null,null,null,null,null,null];
(statearr_25027[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_25027[(1)] = (1));

return statearr_25027;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_24987){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_24987);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e25029){if((e25029 instanceof Object)){
var ex__24068__auto__ = e25029;
var statearr_25033_26904 = state_24987;
(statearr_25033_26904[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25029;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26909 = state_24987;
state_24987 = G__26909;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_24987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_24987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto__))
})();
var state__24322__auto__ = (function (){var statearr_25036 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_25036[(6)] = c__24320__auto__);

return statearr_25036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto__))
);

return c__24320__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25054 = (function (ch,cs,meta25055){
this.ch = ch;
this.cs = cs;
this.meta25055 = meta25055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25056,meta25055__$1){
var self__ = this;
var _25056__$1 = this;
return (new cljs.core.async.t_cljs$core$async25054(self__.ch,self__.cs,meta25055__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25056){
var self__ = this;
var _25056__$1 = this;
return self__.meta25055;
});})(cs))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25054.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25055","meta25055",-975184149,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25054";

cljs.core.async.t_cljs$core$async25054.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25054");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25054.
 */
cljs.core.async.__GT_t_cljs$core$async25054 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25054(ch__$1,cs__$1,meta25055){
return (new cljs.core.async.t_cljs$core$async25054(ch__$1,cs__$1,meta25055));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25054(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24320__auto___26928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___26928,cs,m,dchan,dctr,done){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___26928,cs,m,dchan,dctr,done){
return (function (state_25213){
var state_val_25214 = (state_25213[(1)]);
if((state_val_25214 === (7))){
var inst_25203 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25215_26929 = state_25213__$1;
(statearr_25215_26929[(2)] = inst_25203);

(statearr_25215_26929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (20))){
var inst_25102 = (state_25213[(7)]);
var inst_25114 = cljs.core.first(inst_25102);
var inst_25115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25114,(0),null);
var inst_25116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25114,(1),null);
var state_25213__$1 = (function (){var statearr_25222 = state_25213;
(statearr_25222[(8)] = inst_25115);

return statearr_25222;
})();
if(cljs.core.truth_(inst_25116)){
var statearr_25223_26933 = state_25213__$1;
(statearr_25223_26933[(1)] = (22));

} else {
var statearr_25224_26934 = state_25213__$1;
(statearr_25224_26934[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (27))){
var inst_25146 = (state_25213[(9)]);
var inst_25144 = (state_25213[(10)]);
var inst_25151 = (state_25213[(11)]);
var inst_25070 = (state_25213[(12)]);
var inst_25151__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25144,inst_25146);
var inst_25152 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25151__$1,inst_25070,done);
var state_25213__$1 = (function (){var statearr_25232 = state_25213;
(statearr_25232[(11)] = inst_25151__$1);

return statearr_25232;
})();
if(cljs.core.truth_(inst_25152)){
var statearr_25233_26938 = state_25213__$1;
(statearr_25233_26938[(1)] = (30));

} else {
var statearr_25234_26939 = state_25213__$1;
(statearr_25234_26939[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (1))){
var state_25213__$1 = state_25213;
var statearr_25235_26940 = state_25213__$1;
(statearr_25235_26940[(2)] = null);

(statearr_25235_26940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (24))){
var inst_25102 = (state_25213[(7)]);
var inst_25121 = (state_25213[(2)]);
var inst_25122 = cljs.core.next(inst_25102);
var inst_25079 = inst_25122;
var inst_25080 = null;
var inst_25081 = (0);
var inst_25082 = (0);
var state_25213__$1 = (function (){var statearr_25236 = state_25213;
(statearr_25236[(13)] = inst_25081);

(statearr_25236[(14)] = inst_25121);

(statearr_25236[(15)] = inst_25079);

(statearr_25236[(16)] = inst_25082);

(statearr_25236[(17)] = inst_25080);

return statearr_25236;
})();
var statearr_25237_26941 = state_25213__$1;
(statearr_25237_26941[(2)] = null);

(statearr_25237_26941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (39))){
var state_25213__$1 = state_25213;
var statearr_25241_26942 = state_25213__$1;
(statearr_25241_26942[(2)] = null);

(statearr_25241_26942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (4))){
var inst_25070 = (state_25213[(12)]);
var inst_25070__$1 = (state_25213[(2)]);
var inst_25071 = (inst_25070__$1 == null);
var state_25213__$1 = (function (){var statearr_25243 = state_25213;
(statearr_25243[(12)] = inst_25070__$1);

return statearr_25243;
})();
if(cljs.core.truth_(inst_25071)){
var statearr_25247_26943 = state_25213__$1;
(statearr_25247_26943[(1)] = (5));

} else {
var statearr_25248_26944 = state_25213__$1;
(statearr_25248_26944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (15))){
var inst_25081 = (state_25213[(13)]);
var inst_25079 = (state_25213[(15)]);
var inst_25082 = (state_25213[(16)]);
var inst_25080 = (state_25213[(17)]);
var inst_25097 = (state_25213[(2)]);
var inst_25098 = (inst_25082 + (1));
var tmp25238 = inst_25081;
var tmp25239 = inst_25079;
var tmp25240 = inst_25080;
var inst_25079__$1 = tmp25239;
var inst_25080__$1 = tmp25240;
var inst_25081__$1 = tmp25238;
var inst_25082__$1 = inst_25098;
var state_25213__$1 = (function (){var statearr_25249 = state_25213;
(statearr_25249[(13)] = inst_25081__$1);

(statearr_25249[(18)] = inst_25097);

(statearr_25249[(15)] = inst_25079__$1);

(statearr_25249[(16)] = inst_25082__$1);

(statearr_25249[(17)] = inst_25080__$1);

return statearr_25249;
})();
var statearr_25250_26951 = state_25213__$1;
(statearr_25250_26951[(2)] = null);

(statearr_25250_26951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (21))){
var inst_25125 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25254_26952 = state_25213__$1;
(statearr_25254_26952[(2)] = inst_25125);

(statearr_25254_26952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (31))){
var inst_25151 = (state_25213[(11)]);
var inst_25155 = done(null);
var inst_25156 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25151);
var state_25213__$1 = (function (){var statearr_25257 = state_25213;
(statearr_25257[(19)] = inst_25155);

return statearr_25257;
})();
var statearr_25258_26956 = state_25213__$1;
(statearr_25258_26956[(2)] = inst_25156);

(statearr_25258_26956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (32))){
var inst_25143 = (state_25213[(20)]);
var inst_25146 = (state_25213[(9)]);
var inst_25145 = (state_25213[(21)]);
var inst_25144 = (state_25213[(10)]);
var inst_25158 = (state_25213[(2)]);
var inst_25159 = (inst_25146 + (1));
var tmp25251 = inst_25143;
var tmp25252 = inst_25145;
var tmp25253 = inst_25144;
var inst_25143__$1 = tmp25251;
var inst_25144__$1 = tmp25253;
var inst_25145__$1 = tmp25252;
var inst_25146__$1 = inst_25159;
var state_25213__$1 = (function (){var statearr_25259 = state_25213;
(statearr_25259[(22)] = inst_25158);

(statearr_25259[(20)] = inst_25143__$1);

(statearr_25259[(9)] = inst_25146__$1);

(statearr_25259[(21)] = inst_25145__$1);

(statearr_25259[(10)] = inst_25144__$1);

return statearr_25259;
})();
var statearr_25262_26957 = state_25213__$1;
(statearr_25262_26957[(2)] = null);

(statearr_25262_26957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (40))){
var inst_25171 = (state_25213[(23)]);
var inst_25177 = done(null);
var inst_25178 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25171);
var state_25213__$1 = (function (){var statearr_25263 = state_25213;
(statearr_25263[(24)] = inst_25177);

return statearr_25263;
})();
var statearr_25264_26958 = state_25213__$1;
(statearr_25264_26958[(2)] = inst_25178);

(statearr_25264_26958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (33))){
var inst_25162 = (state_25213[(25)]);
var inst_25164 = cljs.core.chunked_seq_QMARK_(inst_25162);
var state_25213__$1 = state_25213;
if(inst_25164){
var statearr_25265_26959 = state_25213__$1;
(statearr_25265_26959[(1)] = (36));

} else {
var statearr_25266_26960 = state_25213__$1;
(statearr_25266_26960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (13))){
var inst_25091 = (state_25213[(26)]);
var inst_25094 = cljs.core.async.close_BANG_(inst_25091);
var state_25213__$1 = state_25213;
var statearr_25267_26961 = state_25213__$1;
(statearr_25267_26961[(2)] = inst_25094);

(statearr_25267_26961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (22))){
var inst_25115 = (state_25213[(8)]);
var inst_25118 = cljs.core.async.close_BANG_(inst_25115);
var state_25213__$1 = state_25213;
var statearr_25272_26962 = state_25213__$1;
(statearr_25272_26962[(2)] = inst_25118);

(statearr_25272_26962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (36))){
var inst_25162 = (state_25213[(25)]);
var inst_25166 = cljs.core.chunk_first(inst_25162);
var inst_25167 = cljs.core.chunk_rest(inst_25162);
var inst_25168 = cljs.core.count(inst_25166);
var inst_25143 = inst_25167;
var inst_25144 = inst_25166;
var inst_25145 = inst_25168;
var inst_25146 = (0);
var state_25213__$1 = (function (){var statearr_25275 = state_25213;
(statearr_25275[(20)] = inst_25143);

(statearr_25275[(9)] = inst_25146);

(statearr_25275[(21)] = inst_25145);

(statearr_25275[(10)] = inst_25144);

return statearr_25275;
})();
var statearr_25278_26963 = state_25213__$1;
(statearr_25278_26963[(2)] = null);

(statearr_25278_26963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (41))){
var inst_25162 = (state_25213[(25)]);
var inst_25180 = (state_25213[(2)]);
var inst_25181 = cljs.core.next(inst_25162);
var inst_25143 = inst_25181;
var inst_25144 = null;
var inst_25145 = (0);
var inst_25146 = (0);
var state_25213__$1 = (function (){var statearr_25285 = state_25213;
(statearr_25285[(20)] = inst_25143);

(statearr_25285[(9)] = inst_25146);

(statearr_25285[(21)] = inst_25145);

(statearr_25285[(10)] = inst_25144);

(statearr_25285[(27)] = inst_25180);

return statearr_25285;
})();
var statearr_25286_26964 = state_25213__$1;
(statearr_25286_26964[(2)] = null);

(statearr_25286_26964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (43))){
var state_25213__$1 = state_25213;
var statearr_25287_26965 = state_25213__$1;
(statearr_25287_26965[(2)] = null);

(statearr_25287_26965[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (29))){
var inst_25189 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25288_26966 = state_25213__$1;
(statearr_25288_26966[(2)] = inst_25189);

(statearr_25288_26966[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (44))){
var inst_25198 = (state_25213[(2)]);
var state_25213__$1 = (function (){var statearr_25289 = state_25213;
(statearr_25289[(28)] = inst_25198);

return statearr_25289;
})();
var statearr_25290_26967 = state_25213__$1;
(statearr_25290_26967[(2)] = null);

(statearr_25290_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (6))){
var inst_25135 = (state_25213[(29)]);
var inst_25134 = cljs.core.deref(cs);
var inst_25135__$1 = cljs.core.keys(inst_25134);
var inst_25136 = cljs.core.count(inst_25135__$1);
var inst_25137 = cljs.core.reset_BANG_(dctr,inst_25136);
var inst_25142 = cljs.core.seq(inst_25135__$1);
var inst_25143 = inst_25142;
var inst_25144 = null;
var inst_25145 = (0);
var inst_25146 = (0);
var state_25213__$1 = (function (){var statearr_25291 = state_25213;
(statearr_25291[(29)] = inst_25135__$1);

(statearr_25291[(20)] = inst_25143);

(statearr_25291[(9)] = inst_25146);

(statearr_25291[(21)] = inst_25145);

(statearr_25291[(30)] = inst_25137);

(statearr_25291[(10)] = inst_25144);

return statearr_25291;
})();
var statearr_25292_26968 = state_25213__$1;
(statearr_25292_26968[(2)] = null);

(statearr_25292_26968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (28))){
var inst_25162 = (state_25213[(25)]);
var inst_25143 = (state_25213[(20)]);
var inst_25162__$1 = cljs.core.seq(inst_25143);
var state_25213__$1 = (function (){var statearr_25293 = state_25213;
(statearr_25293[(25)] = inst_25162__$1);

return statearr_25293;
})();
if(inst_25162__$1){
var statearr_25296_26969 = state_25213__$1;
(statearr_25296_26969[(1)] = (33));

} else {
var statearr_25297_26970 = state_25213__$1;
(statearr_25297_26970[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (25))){
var inst_25146 = (state_25213[(9)]);
var inst_25145 = (state_25213[(21)]);
var inst_25148 = (inst_25146 < inst_25145);
var inst_25149 = inst_25148;
var state_25213__$1 = state_25213;
if(cljs.core.truth_(inst_25149)){
var statearr_25300_26971 = state_25213__$1;
(statearr_25300_26971[(1)] = (27));

} else {
var statearr_25301_26972 = state_25213__$1;
(statearr_25301_26972[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (34))){
var state_25213__$1 = state_25213;
var statearr_25304_26973 = state_25213__$1;
(statearr_25304_26973[(2)] = null);

(statearr_25304_26973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (17))){
var state_25213__$1 = state_25213;
var statearr_25305_26974 = state_25213__$1;
(statearr_25305_26974[(2)] = null);

(statearr_25305_26974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (3))){
var inst_25205 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25213__$1,inst_25205);
} else {
if((state_val_25214 === (12))){
var inst_25130 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25311_26975 = state_25213__$1;
(statearr_25311_26975[(2)] = inst_25130);

(statearr_25311_26975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (2))){
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25213__$1,(4),ch);
} else {
if((state_val_25214 === (23))){
var state_25213__$1 = state_25213;
var statearr_25318_26976 = state_25213__$1;
(statearr_25318_26976[(2)] = null);

(statearr_25318_26976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (35))){
var inst_25187 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25319_26977 = state_25213__$1;
(statearr_25319_26977[(2)] = inst_25187);

(statearr_25319_26977[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (19))){
var inst_25102 = (state_25213[(7)]);
var inst_25106 = cljs.core.chunk_first(inst_25102);
var inst_25107 = cljs.core.chunk_rest(inst_25102);
var inst_25108 = cljs.core.count(inst_25106);
var inst_25079 = inst_25107;
var inst_25080 = inst_25106;
var inst_25081 = inst_25108;
var inst_25082 = (0);
var state_25213__$1 = (function (){var statearr_25320 = state_25213;
(statearr_25320[(13)] = inst_25081);

(statearr_25320[(15)] = inst_25079);

(statearr_25320[(16)] = inst_25082);

(statearr_25320[(17)] = inst_25080);

return statearr_25320;
})();
var statearr_25321_26978 = state_25213__$1;
(statearr_25321_26978[(2)] = null);

(statearr_25321_26978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (11))){
var inst_25079 = (state_25213[(15)]);
var inst_25102 = (state_25213[(7)]);
var inst_25102__$1 = cljs.core.seq(inst_25079);
var state_25213__$1 = (function (){var statearr_25322 = state_25213;
(statearr_25322[(7)] = inst_25102__$1);

return statearr_25322;
})();
if(inst_25102__$1){
var statearr_25323_26979 = state_25213__$1;
(statearr_25323_26979[(1)] = (16));

} else {
var statearr_25324_26980 = state_25213__$1;
(statearr_25324_26980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (9))){
var inst_25132 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25325_26981 = state_25213__$1;
(statearr_25325_26981[(2)] = inst_25132);

(statearr_25325_26981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (5))){
var inst_25077 = cljs.core.deref(cs);
var inst_25078 = cljs.core.seq(inst_25077);
var inst_25079 = inst_25078;
var inst_25080 = null;
var inst_25081 = (0);
var inst_25082 = (0);
var state_25213__$1 = (function (){var statearr_25326 = state_25213;
(statearr_25326[(13)] = inst_25081);

(statearr_25326[(15)] = inst_25079);

(statearr_25326[(16)] = inst_25082);

(statearr_25326[(17)] = inst_25080);

return statearr_25326;
})();
var statearr_25327_26982 = state_25213__$1;
(statearr_25327_26982[(2)] = null);

(statearr_25327_26982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (14))){
var state_25213__$1 = state_25213;
var statearr_25328_26983 = state_25213__$1;
(statearr_25328_26983[(2)] = null);

(statearr_25328_26983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (45))){
var inst_25195 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25329_26984 = state_25213__$1;
(statearr_25329_26984[(2)] = inst_25195);

(statearr_25329_26984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (26))){
var inst_25135 = (state_25213[(29)]);
var inst_25191 = (state_25213[(2)]);
var inst_25192 = cljs.core.seq(inst_25135);
var state_25213__$1 = (function (){var statearr_25330 = state_25213;
(statearr_25330[(31)] = inst_25191);

return statearr_25330;
})();
if(inst_25192){
var statearr_25331_26985 = state_25213__$1;
(statearr_25331_26985[(1)] = (42));

} else {
var statearr_25332_26986 = state_25213__$1;
(statearr_25332_26986[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (16))){
var inst_25102 = (state_25213[(7)]);
var inst_25104 = cljs.core.chunked_seq_QMARK_(inst_25102);
var state_25213__$1 = state_25213;
if(inst_25104){
var statearr_25333_26987 = state_25213__$1;
(statearr_25333_26987[(1)] = (19));

} else {
var statearr_25334_26988 = state_25213__$1;
(statearr_25334_26988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (38))){
var inst_25184 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25338_26989 = state_25213__$1;
(statearr_25338_26989[(2)] = inst_25184);

(statearr_25338_26989[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (30))){
var state_25213__$1 = state_25213;
var statearr_25342_26990 = state_25213__$1;
(statearr_25342_26990[(2)] = null);

(statearr_25342_26990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (10))){
var inst_25082 = (state_25213[(16)]);
var inst_25080 = (state_25213[(17)]);
var inst_25090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25080,inst_25082);
var inst_25091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25090,(0),null);
var inst_25092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25090,(1),null);
var state_25213__$1 = (function (){var statearr_25344 = state_25213;
(statearr_25344[(26)] = inst_25091);

return statearr_25344;
})();
if(cljs.core.truth_(inst_25092)){
var statearr_25345_26991 = state_25213__$1;
(statearr_25345_26991[(1)] = (13));

} else {
var statearr_25347_26992 = state_25213__$1;
(statearr_25347_26992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (18))){
var inst_25128 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25348_26993 = state_25213__$1;
(statearr_25348_26993[(2)] = inst_25128);

(statearr_25348_26993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (42))){
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25213__$1,(45),dchan);
} else {
if((state_val_25214 === (37))){
var inst_25171 = (state_25213[(23)]);
var inst_25162 = (state_25213[(25)]);
var inst_25070 = (state_25213[(12)]);
var inst_25171__$1 = cljs.core.first(inst_25162);
var inst_25172 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25171__$1,inst_25070,done);
var state_25213__$1 = (function (){var statearr_25350 = state_25213;
(statearr_25350[(23)] = inst_25171__$1);

return statearr_25350;
})();
if(cljs.core.truth_(inst_25172)){
var statearr_25351_26994 = state_25213__$1;
(statearr_25351_26994[(1)] = (39));

} else {
var statearr_25352_26995 = state_25213__$1;
(statearr_25352_26995[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (8))){
var inst_25081 = (state_25213[(13)]);
var inst_25082 = (state_25213[(16)]);
var inst_25084 = (inst_25082 < inst_25081);
var inst_25085 = inst_25084;
var state_25213__$1 = state_25213;
if(cljs.core.truth_(inst_25085)){
var statearr_25353_26996 = state_25213__$1;
(statearr_25353_26996[(1)] = (10));

} else {
var statearr_25354_26997 = state_25213__$1;
(statearr_25354_26997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___26928,cs,m,dchan,dctr,done))
;
return ((function (switch__24064__auto__,c__24320__auto___26928,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24065__auto__ = null;
var cljs$core$async$mult_$_state_machine__24065__auto____0 = (function (){
var statearr_25355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25355[(0)] = cljs$core$async$mult_$_state_machine__24065__auto__);

(statearr_25355[(1)] = (1));

return statearr_25355;
});
var cljs$core$async$mult_$_state_machine__24065__auto____1 = (function (state_25213){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_25213);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e25356){if((e25356 instanceof Object)){
var ex__24068__auto__ = e25356;
var statearr_25357_26998 = state_25213;
(statearr_25357_26998[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26999 = state_25213;
state_25213 = G__26999;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24065__auto__ = function(state_25213){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24065__auto____1.call(this,state_25213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24065__auto____0;
cljs$core$async$mult_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24065__auto____1;
return cljs$core$async$mult_$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___26928,cs,m,dchan,dctr,done))
})();
var state__24322__auto__ = (function (){var statearr_25362 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_25362[(6)] = c__24320__auto___26928);

return statearr_25362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___26928,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25364 = arguments.length;
switch (G__25364) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27005 = arguments.length;
var i__4731__auto___27006 = (0);
while(true){
if((i__4731__auto___27006 < len__4730__auto___27005)){
args__4736__auto__.push((arguments[i__4731__auto___27006]));

var G__27007 = (i__4731__auto___27006 + (1));
i__4731__auto___27006 = G__27007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25380){
var map__25381 = p__25380;
var map__25381__$1 = (((((!((map__25381 == null))))?(((((map__25381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25381):map__25381);
var opts = map__25381__$1;
var statearr_25384_27009 = state;
(statearr_25384_27009[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__25381,map__25381__$1,opts){
return (function (val){
var statearr_25385_27011 = state;
(statearr_25385_27011[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25381,map__25381__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25386_27012 = state;
(statearr_25386_27012[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25375){
var G__25376 = cljs.core.first(seq25375);
var seq25375__$1 = cljs.core.next(seq25375);
var G__25377 = cljs.core.first(seq25375__$1);
var seq25375__$2 = cljs.core.next(seq25375__$1);
var G__25378 = cljs.core.first(seq25375__$2);
var seq25375__$3 = cljs.core.next(seq25375__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25376,G__25377,G__25378,seq25375__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25391 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25392){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25392 = meta25392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25393,meta25392__$1){
var self__ = this;
var _25393__$1 = this;
return (new cljs.core.async.t_cljs$core$async25391(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25392__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25393){
var self__ = this;
var _25393__$1 = this;
return self__.meta25392;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25392","meta25392",-78982569,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25391";

cljs.core.async.t_cljs$core$async25391.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25391");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25391.
 */
cljs.core.async.__GT_t_cljs$core$async25391 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25391(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25392){
return (new cljs.core.async.t_cljs$core$async25391(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25392));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25391(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24320__auto___27025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25505){
var state_val_25506 = (state_25505[(1)]);
if((state_val_25506 === (7))){
var inst_25415 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
var statearr_25511_27026 = state_25505__$1;
(statearr_25511_27026[(2)] = inst_25415);

(statearr_25511_27026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (20))){
var inst_25427 = (state_25505[(7)]);
var state_25505__$1 = state_25505;
var statearr_25514_27027 = state_25505__$1;
(statearr_25514_27027[(2)] = inst_25427);

(statearr_25514_27027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (27))){
var state_25505__$1 = state_25505;
var statearr_25515_27028 = state_25505__$1;
(statearr_25515_27028[(2)] = null);

(statearr_25515_27028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (1))){
var inst_25402 = (state_25505[(8)]);
var inst_25402__$1 = calc_state();
var inst_25404 = (inst_25402__$1 == null);
var inst_25405 = cljs.core.not(inst_25404);
var state_25505__$1 = (function (){var statearr_25516 = state_25505;
(statearr_25516[(8)] = inst_25402__$1);

return statearr_25516;
})();
if(inst_25405){
var statearr_25517_27029 = state_25505__$1;
(statearr_25517_27029[(1)] = (2));

} else {
var statearr_25518_27030 = state_25505__$1;
(statearr_25518_27030[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (24))){
var inst_25461 = (state_25505[(9)]);
var inst_25451 = (state_25505[(10)]);
var inst_25476 = (state_25505[(11)]);
var inst_25476__$1 = (inst_25451.cljs$core$IFn$_invoke$arity$1 ? inst_25451.cljs$core$IFn$_invoke$arity$1(inst_25461) : inst_25451.call(null,inst_25461));
var state_25505__$1 = (function (){var statearr_25522 = state_25505;
(statearr_25522[(11)] = inst_25476__$1);

return statearr_25522;
})();
if(cljs.core.truth_(inst_25476__$1)){
var statearr_25524_27031 = state_25505__$1;
(statearr_25524_27031[(1)] = (29));

} else {
var statearr_25525_27033 = state_25505__$1;
(statearr_25525_27033[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (4))){
var inst_25418 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25418)){
var statearr_25526_27034 = state_25505__$1;
(statearr_25526_27034[(1)] = (8));

} else {
var statearr_25527_27035 = state_25505__$1;
(statearr_25527_27035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (15))){
var inst_25445 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25445)){
var statearr_25529_27036 = state_25505__$1;
(statearr_25529_27036[(1)] = (19));

} else {
var statearr_25530_27037 = state_25505__$1;
(statearr_25530_27037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (21))){
var inst_25450 = (state_25505[(12)]);
var inst_25450__$1 = (state_25505[(2)]);
var inst_25451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25450__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25450__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25450__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25505__$1 = (function (){var statearr_25532 = state_25505;
(statearr_25532[(12)] = inst_25450__$1);

(statearr_25532[(13)] = inst_25452);

(statearr_25532[(10)] = inst_25451);

return statearr_25532;
})();
return cljs.core.async.ioc_alts_BANG_(state_25505__$1,(22),inst_25453);
} else {
if((state_val_25506 === (31))){
var inst_25484 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25484)){
var statearr_25533_27041 = state_25505__$1;
(statearr_25533_27041[(1)] = (32));

} else {
var statearr_25534_27042 = state_25505__$1;
(statearr_25534_27042[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (32))){
var inst_25460 = (state_25505[(14)]);
var state_25505__$1 = state_25505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25505__$1,(35),out,inst_25460);
} else {
if((state_val_25506 === (33))){
var inst_25450 = (state_25505[(12)]);
var inst_25427 = inst_25450;
var state_25505__$1 = (function (){var statearr_25536 = state_25505;
(statearr_25536[(7)] = inst_25427);

return statearr_25536;
})();
var statearr_25537_27043 = state_25505__$1;
(statearr_25537_27043[(2)] = null);

(statearr_25537_27043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (13))){
var inst_25427 = (state_25505[(7)]);
var inst_25434 = inst_25427.cljs$lang$protocol_mask$partition0$;
var inst_25435 = (inst_25434 & (64));
var inst_25436 = inst_25427.cljs$core$ISeq$;
var inst_25437 = (cljs.core.PROTOCOL_SENTINEL === inst_25436);
var inst_25438 = ((inst_25435) || (inst_25437));
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25438)){
var statearr_25539_27044 = state_25505__$1;
(statearr_25539_27044[(1)] = (16));

} else {
var statearr_25540_27045 = state_25505__$1;
(statearr_25540_27045[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (22))){
var inst_25461 = (state_25505[(9)]);
var inst_25460 = (state_25505[(14)]);
var inst_25459 = (state_25505[(2)]);
var inst_25460__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25459,(0),null);
var inst_25461__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25459,(1),null);
var inst_25463 = (inst_25460__$1 == null);
var inst_25464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25461__$1,change);
var inst_25465 = ((inst_25463) || (inst_25464));
var state_25505__$1 = (function (){var statearr_25541 = state_25505;
(statearr_25541[(9)] = inst_25461__$1);

(statearr_25541[(14)] = inst_25460__$1);

return statearr_25541;
})();
if(cljs.core.truth_(inst_25465)){
var statearr_25542_27056 = state_25505__$1;
(statearr_25542_27056[(1)] = (23));

} else {
var statearr_25543_27057 = state_25505__$1;
(statearr_25543_27057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (36))){
var inst_25450 = (state_25505[(12)]);
var inst_25427 = inst_25450;
var state_25505__$1 = (function (){var statearr_25544 = state_25505;
(statearr_25544[(7)] = inst_25427);

return statearr_25544;
})();
var statearr_25545_27064 = state_25505__$1;
(statearr_25545_27064[(2)] = null);

(statearr_25545_27064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (29))){
var inst_25476 = (state_25505[(11)]);
var state_25505__$1 = state_25505;
var statearr_25546_27070 = state_25505__$1;
(statearr_25546_27070[(2)] = inst_25476);

(statearr_25546_27070[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (6))){
var state_25505__$1 = state_25505;
var statearr_25548_27074 = state_25505__$1;
(statearr_25548_27074[(2)] = false);

(statearr_25548_27074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (28))){
var inst_25472 = (state_25505[(2)]);
var inst_25473 = calc_state();
var inst_25427 = inst_25473;
var state_25505__$1 = (function (){var statearr_25551 = state_25505;
(statearr_25551[(7)] = inst_25427);

(statearr_25551[(15)] = inst_25472);

return statearr_25551;
})();
var statearr_25552_27082 = state_25505__$1;
(statearr_25552_27082[(2)] = null);

(statearr_25552_27082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (25))){
var inst_25499 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
var statearr_25556_27087 = state_25505__$1;
(statearr_25556_27087[(2)] = inst_25499);

(statearr_25556_27087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (34))){
var inst_25497 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
var statearr_25557_27093 = state_25505__$1;
(statearr_25557_27093[(2)] = inst_25497);

(statearr_25557_27093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (17))){
var state_25505__$1 = state_25505;
var statearr_25559_27097 = state_25505__$1;
(statearr_25559_27097[(2)] = false);

(statearr_25559_27097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (3))){
var state_25505__$1 = state_25505;
var statearr_25562_27102 = state_25505__$1;
(statearr_25562_27102[(2)] = false);

(statearr_25562_27102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (12))){
var inst_25502 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25505__$1,inst_25502);
} else {
if((state_val_25506 === (2))){
var inst_25402 = (state_25505[(8)]);
var inst_25407 = inst_25402.cljs$lang$protocol_mask$partition0$;
var inst_25408 = (inst_25407 & (64));
var inst_25409 = inst_25402.cljs$core$ISeq$;
var inst_25410 = (cljs.core.PROTOCOL_SENTINEL === inst_25409);
var inst_25411 = ((inst_25408) || (inst_25410));
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25411)){
var statearr_25563_27108 = state_25505__$1;
(statearr_25563_27108[(1)] = (5));

} else {
var statearr_25566_27109 = state_25505__$1;
(statearr_25566_27109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (23))){
var inst_25460 = (state_25505[(14)]);
var inst_25467 = (inst_25460 == null);
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25467)){
var statearr_25569_27110 = state_25505__$1;
(statearr_25569_27110[(1)] = (26));

} else {
var statearr_25571_27111 = state_25505__$1;
(statearr_25571_27111[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (35))){
var inst_25487 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
if(cljs.core.truth_(inst_25487)){
var statearr_25573_27112 = state_25505__$1;
(statearr_25573_27112[(1)] = (36));

} else {
var statearr_25574_27113 = state_25505__$1;
(statearr_25574_27113[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (19))){
var inst_25427 = (state_25505[(7)]);
var inst_25447 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25427);
var state_25505__$1 = state_25505;
var statearr_25575_27114 = state_25505__$1;
(statearr_25575_27114[(2)] = inst_25447);

(statearr_25575_27114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (11))){
var inst_25427 = (state_25505[(7)]);
var inst_25431 = (inst_25427 == null);
var inst_25432 = cljs.core.not(inst_25431);
var state_25505__$1 = state_25505;
if(inst_25432){
var statearr_25576_27119 = state_25505__$1;
(statearr_25576_27119[(1)] = (13));

} else {
var statearr_25577_27120 = state_25505__$1;
(statearr_25577_27120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (9))){
var inst_25402 = (state_25505[(8)]);
var state_25505__$1 = state_25505;
var statearr_25578_27121 = state_25505__$1;
(statearr_25578_27121[(2)] = inst_25402);

(statearr_25578_27121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (5))){
var state_25505__$1 = state_25505;
var statearr_25580_27122 = state_25505__$1;
(statearr_25580_27122[(2)] = true);

(statearr_25580_27122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (14))){
var state_25505__$1 = state_25505;
var statearr_25581_27123 = state_25505__$1;
(statearr_25581_27123[(2)] = false);

(statearr_25581_27123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (26))){
var inst_25461 = (state_25505[(9)]);
var inst_25469 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25461);
var state_25505__$1 = state_25505;
var statearr_25582_27124 = state_25505__$1;
(statearr_25582_27124[(2)] = inst_25469);

(statearr_25582_27124[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (16))){
var state_25505__$1 = state_25505;
var statearr_25583_27125 = state_25505__$1;
(statearr_25583_27125[(2)] = true);

(statearr_25583_27125[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (38))){
var inst_25493 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
var statearr_25584_27126 = state_25505__$1;
(statearr_25584_27126[(2)] = inst_25493);

(statearr_25584_27126[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (30))){
var inst_25461 = (state_25505[(9)]);
var inst_25452 = (state_25505[(13)]);
var inst_25451 = (state_25505[(10)]);
var inst_25479 = cljs.core.empty_QMARK_(inst_25451);
var inst_25480 = (inst_25452.cljs$core$IFn$_invoke$arity$1 ? inst_25452.cljs$core$IFn$_invoke$arity$1(inst_25461) : inst_25452.call(null,inst_25461));
var inst_25481 = cljs.core.not(inst_25480);
var inst_25482 = ((inst_25479) && (inst_25481));
var state_25505__$1 = state_25505;
var statearr_25589_27127 = state_25505__$1;
(statearr_25589_27127[(2)] = inst_25482);

(statearr_25589_27127[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (10))){
var inst_25402 = (state_25505[(8)]);
var inst_25423 = (state_25505[(2)]);
var inst_25424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25423,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25423,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25423,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25427 = inst_25402;
var state_25505__$1 = (function (){var statearr_25594 = state_25505;
(statearr_25594[(16)] = inst_25425);

(statearr_25594[(7)] = inst_25427);

(statearr_25594[(17)] = inst_25424);

(statearr_25594[(18)] = inst_25426);

return statearr_25594;
})();
var statearr_25595_27128 = state_25505__$1;
(statearr_25595_27128[(2)] = null);

(statearr_25595_27128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (18))){
var inst_25442 = (state_25505[(2)]);
var state_25505__$1 = state_25505;
var statearr_25601_27129 = state_25505__$1;
(statearr_25601_27129[(2)] = inst_25442);

(statearr_25601_27129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (37))){
var state_25505__$1 = state_25505;
var statearr_25602_27131 = state_25505__$1;
(statearr_25602_27131[(2)] = null);

(statearr_25602_27131[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25506 === (8))){
var inst_25402 = (state_25505[(8)]);
var inst_25420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25402);
var state_25505__$1 = state_25505;
var statearr_25607_27133 = state_25505__$1;
(statearr_25607_27133[(2)] = inst_25420);

(statearr_25607_27133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24064__auto__,c__24320__auto___27025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24065__auto__ = null;
var cljs$core$async$mix_$_state_machine__24065__auto____0 = (function (){
var statearr_25610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25610[(0)] = cljs$core$async$mix_$_state_machine__24065__auto__);

(statearr_25610[(1)] = (1));

return statearr_25610;
});
var cljs$core$async$mix_$_state_machine__24065__auto____1 = (function (state_25505){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_25505);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e25611){if((e25611 instanceof Object)){
var ex__24068__auto__ = e25611;
var statearr_25612_27139 = state_25505;
(statearr_25612_27139[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27141 = state_25505;
state_25505 = G__27141;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24065__auto__ = function(state_25505){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24065__auto____1.call(this,state_25505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24065__auto____0;
cljs$core$async$mix_$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24065__auto____1;
return cljs$core$async$mix_$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24322__auto__ = (function (){var statearr_25613 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_25613[(6)] = c__24320__auto___27025);

return statearr_25613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25617 = arguments.length;
switch (G__25617) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25639 = arguments.length;
switch (G__25639) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__25635_SHARP_){
if(cljs.core.truth_((p1__25635_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25635_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25635_SHARP_.call(null,topic)))){
return p1__25635_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25635_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25644 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25645){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25645 = meta25645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25646,meta25645__$1){
var self__ = this;
var _25646__$1 = this;
return (new cljs.core.async.t_cljs$core$async25644(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25645__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25646){
var self__ = this;
var _25646__$1 = this;
return self__.meta25645;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25645","meta25645",192753850,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25644";

cljs.core.async.t_cljs$core$async25644.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25644");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25644.
 */
cljs.core.async.__GT_t_cljs$core$async25644 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25644(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25645){
return (new cljs.core.async.t_cljs$core$async25644(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25645));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25644(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24320__auto___27155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27155,mults,ensure_mult,p){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27155,mults,ensure_mult,p){
return (function (state_25733){
var state_val_25734 = (state_25733[(1)]);
if((state_val_25734 === (7))){
var inst_25729 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
var statearr_25737_27156 = state_25733__$1;
(statearr_25737_27156[(2)] = inst_25729);

(statearr_25737_27156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (20))){
var state_25733__$1 = state_25733;
var statearr_25738_27157 = state_25733__$1;
(statearr_25738_27157[(2)] = null);

(statearr_25738_27157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (1))){
var state_25733__$1 = state_25733;
var statearr_25739_27158 = state_25733__$1;
(statearr_25739_27158[(2)] = null);

(statearr_25739_27158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (24))){
var inst_25712 = (state_25733[(7)]);
var inst_25721 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25712);
var state_25733__$1 = state_25733;
var statearr_25740_27159 = state_25733__$1;
(statearr_25740_27159[(2)] = inst_25721);

(statearr_25740_27159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (4))){
var inst_25661 = (state_25733[(8)]);
var inst_25661__$1 = (state_25733[(2)]);
var inst_25662 = (inst_25661__$1 == null);
var state_25733__$1 = (function (){var statearr_25741 = state_25733;
(statearr_25741[(8)] = inst_25661__$1);

return statearr_25741;
})();
if(cljs.core.truth_(inst_25662)){
var statearr_25742_27160 = state_25733__$1;
(statearr_25742_27160[(1)] = (5));

} else {
var statearr_25743_27161 = state_25733__$1;
(statearr_25743_27161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (15))){
var inst_25705 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
var statearr_25744_27162 = state_25733__$1;
(statearr_25744_27162[(2)] = inst_25705);

(statearr_25744_27162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (21))){
var inst_25726 = (state_25733[(2)]);
var state_25733__$1 = (function (){var statearr_25747 = state_25733;
(statearr_25747[(9)] = inst_25726);

return statearr_25747;
})();
var statearr_25748_27164 = state_25733__$1;
(statearr_25748_27164[(2)] = null);

(statearr_25748_27164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (13))){
var inst_25686 = (state_25733[(10)]);
var inst_25688 = cljs.core.chunked_seq_QMARK_(inst_25686);
var state_25733__$1 = state_25733;
if(inst_25688){
var statearr_25749_27165 = state_25733__$1;
(statearr_25749_27165[(1)] = (16));

} else {
var statearr_25750_27166 = state_25733__$1;
(statearr_25750_27166[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (22))){
var inst_25718 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
if(cljs.core.truth_(inst_25718)){
var statearr_25752_27167 = state_25733__$1;
(statearr_25752_27167[(1)] = (23));

} else {
var statearr_25753_27168 = state_25733__$1;
(statearr_25753_27168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (6))){
var inst_25714 = (state_25733[(11)]);
var inst_25712 = (state_25733[(7)]);
var inst_25661 = (state_25733[(8)]);
var inst_25712__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25661) : topic_fn.call(null,inst_25661));
var inst_25713 = cljs.core.deref(mults);
var inst_25714__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25713,inst_25712__$1);
var state_25733__$1 = (function (){var statearr_25755 = state_25733;
(statearr_25755[(11)] = inst_25714__$1);

(statearr_25755[(7)] = inst_25712__$1);

return statearr_25755;
})();
if(cljs.core.truth_(inst_25714__$1)){
var statearr_25756_27169 = state_25733__$1;
(statearr_25756_27169[(1)] = (19));

} else {
var statearr_25757_27170 = state_25733__$1;
(statearr_25757_27170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (25))){
var inst_25723 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
var statearr_25759_27171 = state_25733__$1;
(statearr_25759_27171[(2)] = inst_25723);

(statearr_25759_27171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (17))){
var inst_25686 = (state_25733[(10)]);
var inst_25696 = cljs.core.first(inst_25686);
var inst_25697 = cljs.core.async.muxch_STAR_(inst_25696);
var inst_25698 = cljs.core.async.close_BANG_(inst_25697);
var inst_25699 = cljs.core.next(inst_25686);
var inst_25671 = inst_25699;
var inst_25672 = null;
var inst_25673 = (0);
var inst_25674 = (0);
var state_25733__$1 = (function (){var statearr_25760 = state_25733;
(statearr_25760[(12)] = inst_25673);

(statearr_25760[(13)] = inst_25674);

(statearr_25760[(14)] = inst_25698);

(statearr_25760[(15)] = inst_25671);

(statearr_25760[(16)] = inst_25672);

return statearr_25760;
})();
var statearr_25761_27172 = state_25733__$1;
(statearr_25761_27172[(2)] = null);

(statearr_25761_27172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (3))){
var inst_25731 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25733__$1,inst_25731);
} else {
if((state_val_25734 === (12))){
var inst_25707 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
var statearr_25762_27174 = state_25733__$1;
(statearr_25762_27174[(2)] = inst_25707);

(statearr_25762_27174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (2))){
var state_25733__$1 = state_25733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25733__$1,(4),ch);
} else {
if((state_val_25734 === (23))){
var state_25733__$1 = state_25733;
var statearr_25763_27175 = state_25733__$1;
(statearr_25763_27175[(2)] = null);

(statearr_25763_27175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (19))){
var inst_25714 = (state_25733[(11)]);
var inst_25661 = (state_25733[(8)]);
var inst_25716 = cljs.core.async.muxch_STAR_(inst_25714);
var state_25733__$1 = state_25733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25733__$1,(22),inst_25716,inst_25661);
} else {
if((state_val_25734 === (11))){
var inst_25686 = (state_25733[(10)]);
var inst_25671 = (state_25733[(15)]);
var inst_25686__$1 = cljs.core.seq(inst_25671);
var state_25733__$1 = (function (){var statearr_25765 = state_25733;
(statearr_25765[(10)] = inst_25686__$1);

return statearr_25765;
})();
if(inst_25686__$1){
var statearr_25766_27177 = state_25733__$1;
(statearr_25766_27177[(1)] = (13));

} else {
var statearr_25767_27178 = state_25733__$1;
(statearr_25767_27178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (9))){
var inst_25710 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
var statearr_25768_27179 = state_25733__$1;
(statearr_25768_27179[(2)] = inst_25710);

(statearr_25768_27179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (5))){
var inst_25668 = cljs.core.deref(mults);
var inst_25669 = cljs.core.vals(inst_25668);
var inst_25670 = cljs.core.seq(inst_25669);
var inst_25671 = inst_25670;
var inst_25672 = null;
var inst_25673 = (0);
var inst_25674 = (0);
var state_25733__$1 = (function (){var statearr_25770 = state_25733;
(statearr_25770[(12)] = inst_25673);

(statearr_25770[(13)] = inst_25674);

(statearr_25770[(15)] = inst_25671);

(statearr_25770[(16)] = inst_25672);

return statearr_25770;
})();
var statearr_25771_27180 = state_25733__$1;
(statearr_25771_27180[(2)] = null);

(statearr_25771_27180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (14))){
var state_25733__$1 = state_25733;
var statearr_25775_27181 = state_25733__$1;
(statearr_25775_27181[(2)] = null);

(statearr_25775_27181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (16))){
var inst_25686 = (state_25733[(10)]);
var inst_25691 = cljs.core.chunk_first(inst_25686);
var inst_25692 = cljs.core.chunk_rest(inst_25686);
var inst_25693 = cljs.core.count(inst_25691);
var inst_25671 = inst_25692;
var inst_25672 = inst_25691;
var inst_25673 = inst_25693;
var inst_25674 = (0);
var state_25733__$1 = (function (){var statearr_25776 = state_25733;
(statearr_25776[(12)] = inst_25673);

(statearr_25776[(13)] = inst_25674);

(statearr_25776[(15)] = inst_25671);

(statearr_25776[(16)] = inst_25672);

return statearr_25776;
})();
var statearr_25777_27182 = state_25733__$1;
(statearr_25777_27182[(2)] = null);

(statearr_25777_27182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (10))){
var inst_25673 = (state_25733[(12)]);
var inst_25674 = (state_25733[(13)]);
var inst_25671 = (state_25733[(15)]);
var inst_25672 = (state_25733[(16)]);
var inst_25679 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25672,inst_25674);
var inst_25680 = cljs.core.async.muxch_STAR_(inst_25679);
var inst_25681 = cljs.core.async.close_BANG_(inst_25680);
var inst_25682 = (inst_25674 + (1));
var tmp25772 = inst_25673;
var tmp25773 = inst_25671;
var tmp25774 = inst_25672;
var inst_25671__$1 = tmp25773;
var inst_25672__$1 = tmp25774;
var inst_25673__$1 = tmp25772;
var inst_25674__$1 = inst_25682;
var state_25733__$1 = (function (){var statearr_25786 = state_25733;
(statearr_25786[(12)] = inst_25673__$1);

(statearr_25786[(13)] = inst_25674__$1);

(statearr_25786[(15)] = inst_25671__$1);

(statearr_25786[(17)] = inst_25681);

(statearr_25786[(16)] = inst_25672__$1);

return statearr_25786;
})();
var statearr_25787_27183 = state_25733__$1;
(statearr_25787_27183[(2)] = null);

(statearr_25787_27183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (18))){
var inst_25702 = (state_25733[(2)]);
var state_25733__$1 = state_25733;
var statearr_25788_27184 = state_25733__$1;
(statearr_25788_27184[(2)] = inst_25702);

(statearr_25788_27184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25734 === (8))){
var inst_25673 = (state_25733[(12)]);
var inst_25674 = (state_25733[(13)]);
var inst_25676 = (inst_25674 < inst_25673);
var inst_25677 = inst_25676;
var state_25733__$1 = state_25733;
if(cljs.core.truth_(inst_25677)){
var statearr_25793_27185 = state_25733__$1;
(statearr_25793_27185[(1)] = (10));

} else {
var statearr_25794_27186 = state_25733__$1;
(statearr_25794_27186[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27155,mults,ensure_mult,p))
;
return ((function (switch__24064__auto__,c__24320__auto___27155,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_25796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25796[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_25796[(1)] = (1));

return statearr_25796;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_25733){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_25733);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e25797){if((e25797 instanceof Object)){
var ex__24068__auto__ = e25797;
var statearr_25798_27187 = state_25733;
(statearr_25798_27187[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27188 = state_25733;
state_25733 = G__27188;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_25733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_25733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27155,mults,ensure_mult,p))
})();
var state__24322__auto__ = (function (){var statearr_25799 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_25799[(6)] = c__24320__auto___27155);

return statearr_25799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27155,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25801 = arguments.length;
switch (G__25801) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25810 = arguments.length;
switch (G__25810) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25816 = arguments.length;
switch (G__25816) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__24320__auto___27192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25860){
var state_val_25861 = (state_25860[(1)]);
if((state_val_25861 === (7))){
var state_25860__$1 = state_25860;
var statearr_25866_27193 = state_25860__$1;
(statearr_25866_27193[(2)] = null);

(statearr_25866_27193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (1))){
var state_25860__$1 = state_25860;
var statearr_25867_27194 = state_25860__$1;
(statearr_25867_27194[(2)] = null);

(statearr_25867_27194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (4))){
var inst_25821 = (state_25860[(7)]);
var inst_25823 = (inst_25821 < cnt);
var state_25860__$1 = state_25860;
if(cljs.core.truth_(inst_25823)){
var statearr_25870_27196 = state_25860__$1;
(statearr_25870_27196[(1)] = (6));

} else {
var statearr_25871_27197 = state_25860__$1;
(statearr_25871_27197[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (15))){
var inst_25856 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
var statearr_25876_27198 = state_25860__$1;
(statearr_25876_27198[(2)] = inst_25856);

(statearr_25876_27198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (13))){
var inst_25849 = cljs.core.async.close_BANG_(out);
var state_25860__$1 = state_25860;
var statearr_25878_27199 = state_25860__$1;
(statearr_25878_27199[(2)] = inst_25849);

(statearr_25878_27199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (6))){
var state_25860__$1 = state_25860;
var statearr_25879_27200 = state_25860__$1;
(statearr_25879_27200[(2)] = null);

(statearr_25879_27200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (3))){
var inst_25858 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25860__$1,inst_25858);
} else {
if((state_val_25861 === (12))){
var inst_25844 = (state_25860[(8)]);
var inst_25844__$1 = (state_25860[(2)]);
var inst_25845 = cljs.core.some(cljs.core.nil_QMARK_,inst_25844__$1);
var state_25860__$1 = (function (){var statearr_25897 = state_25860;
(statearr_25897[(8)] = inst_25844__$1);

return statearr_25897;
})();
if(cljs.core.truth_(inst_25845)){
var statearr_25900_27201 = state_25860__$1;
(statearr_25900_27201[(1)] = (13));

} else {
var statearr_25903_27202 = state_25860__$1;
(statearr_25903_27202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (2))){
var inst_25820 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25821 = (0);
var state_25860__$1 = (function (){var statearr_25904 = state_25860;
(statearr_25904[(7)] = inst_25821);

(statearr_25904[(9)] = inst_25820);

return statearr_25904;
})();
var statearr_25905_27203 = state_25860__$1;
(statearr_25905_27203[(2)] = null);

(statearr_25905_27203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (11))){
var inst_25821 = (state_25860[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25860,(10),Object,null,(9));
var inst_25830 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25821) : chs__$1.call(null,inst_25821));
var inst_25831 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25821) : done.call(null,inst_25821));
var inst_25832 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25830,inst_25831);
var state_25860__$1 = state_25860;
var statearr_25909_27204 = state_25860__$1;
(statearr_25909_27204[(2)] = inst_25832);


cljs.core.async.impl.ioc_helpers.process_exception(state_25860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (9))){
var inst_25821 = (state_25860[(7)]);
var inst_25834 = (state_25860[(2)]);
var inst_25836 = (inst_25821 + (1));
var inst_25821__$1 = inst_25836;
var state_25860__$1 = (function (){var statearr_25910 = state_25860;
(statearr_25910[(7)] = inst_25821__$1);

(statearr_25910[(10)] = inst_25834);

return statearr_25910;
})();
var statearr_25912_27205 = state_25860__$1;
(statearr_25912_27205[(2)] = null);

(statearr_25912_27205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (5))){
var inst_25842 = (state_25860[(2)]);
var state_25860__$1 = (function (){var statearr_25914 = state_25860;
(statearr_25914[(11)] = inst_25842);

return statearr_25914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25860__$1,(12),dchan);
} else {
if((state_val_25861 === (14))){
var inst_25844 = (state_25860[(8)]);
var inst_25851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25844);
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25860__$1,(16),out,inst_25851);
} else {
if((state_val_25861 === (16))){
var inst_25853 = (state_25860[(2)]);
var state_25860__$1 = (function (){var statearr_25916 = state_25860;
(statearr_25916[(12)] = inst_25853);

return statearr_25916;
})();
var statearr_25918_27206 = state_25860__$1;
(statearr_25918_27206[(2)] = null);

(statearr_25918_27206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (10))){
var inst_25825 = (state_25860[(2)]);
var inst_25826 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25860__$1 = (function (){var statearr_25919 = state_25860;
(statearr_25919[(13)] = inst_25825);

return statearr_25919;
})();
var statearr_25920_27207 = state_25860__$1;
(statearr_25920_27207[(2)] = inst_25826);


cljs.core.async.impl.ioc_helpers.process_exception(state_25860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (8))){
var inst_25840 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
var statearr_25922_27208 = state_25860__$1;
(statearr_25922_27208[(2)] = inst_25840);

(statearr_25922_27208[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27192,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24064__auto__,c__24320__auto___27192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_25923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25923[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_25923[(1)] = (1));

return statearr_25923;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_25860){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_25860);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e25924){if((e25924 instanceof Object)){
var ex__24068__auto__ = e25924;
var statearr_25928_27209 = state_25860;
(statearr_25928_27209[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27210 = state_25860;
state_25860 = G__27210;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_25860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_25860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27192,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24322__auto__ = (function (){var statearr_25929 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_25929[(6)] = c__24320__auto___27192);

return statearr_25929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27192,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25934 = arguments.length;
switch (G__25934) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24320__auto___27212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27212,out){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27212,out){
return (function (state_25978){
var state_val_25979 = (state_25978[(1)]);
if((state_val_25979 === (7))){
var inst_25952 = (state_25978[(7)]);
var inst_25953 = (state_25978[(8)]);
var inst_25952__$1 = (state_25978[(2)]);
var inst_25953__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25952__$1,(0),null);
var inst_25954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25952__$1,(1),null);
var inst_25955 = (inst_25953__$1 == null);
var state_25978__$1 = (function (){var statearr_25981 = state_25978;
(statearr_25981[(9)] = inst_25954);

(statearr_25981[(7)] = inst_25952__$1);

(statearr_25981[(8)] = inst_25953__$1);

return statearr_25981;
})();
if(cljs.core.truth_(inst_25955)){
var statearr_25982_27213 = state_25978__$1;
(statearr_25982_27213[(1)] = (8));

} else {
var statearr_25987_27214 = state_25978__$1;
(statearr_25987_27214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (1))){
var inst_25939 = cljs.core.vec(chs);
var inst_25943 = inst_25939;
var state_25978__$1 = (function (){var statearr_25988 = state_25978;
(statearr_25988[(10)] = inst_25943);

return statearr_25988;
})();
var statearr_25989_27215 = state_25978__$1;
(statearr_25989_27215[(2)] = null);

(statearr_25989_27215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (4))){
var inst_25943 = (state_25978[(10)]);
var state_25978__$1 = state_25978;
return cljs.core.async.ioc_alts_BANG_(state_25978__$1,(7),inst_25943);
} else {
if((state_val_25979 === (6))){
var inst_25972 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
var statearr_25990_27216 = state_25978__$1;
(statearr_25990_27216[(2)] = inst_25972);

(statearr_25990_27216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (3))){
var inst_25974 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25978__$1,inst_25974);
} else {
if((state_val_25979 === (2))){
var inst_25943 = (state_25978[(10)]);
var inst_25945 = cljs.core.count(inst_25943);
var inst_25946 = (inst_25945 > (0));
var state_25978__$1 = state_25978;
if(cljs.core.truth_(inst_25946)){
var statearr_25992_27217 = state_25978__$1;
(statearr_25992_27217[(1)] = (4));

} else {
var statearr_25999_27218 = state_25978__$1;
(statearr_25999_27218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (11))){
var inst_25943 = (state_25978[(10)]);
var inst_25965 = (state_25978[(2)]);
var tmp25991 = inst_25943;
var inst_25943__$1 = tmp25991;
var state_25978__$1 = (function (){var statearr_26007 = state_25978;
(statearr_26007[(10)] = inst_25943__$1);

(statearr_26007[(11)] = inst_25965);

return statearr_26007;
})();
var statearr_26008_27219 = state_25978__$1;
(statearr_26008_27219[(2)] = null);

(statearr_26008_27219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (9))){
var inst_25953 = (state_25978[(8)]);
var state_25978__$1 = state_25978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25978__$1,(11),out,inst_25953);
} else {
if((state_val_25979 === (5))){
var inst_25970 = cljs.core.async.close_BANG_(out);
var state_25978__$1 = state_25978;
var statearr_26021_27220 = state_25978__$1;
(statearr_26021_27220[(2)] = inst_25970);

(statearr_26021_27220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (10))){
var inst_25968 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
var statearr_26025_27221 = state_25978__$1;
(statearr_26025_27221[(2)] = inst_25968);

(statearr_26025_27221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (8))){
var inst_25954 = (state_25978[(9)]);
var inst_25943 = (state_25978[(10)]);
var inst_25952 = (state_25978[(7)]);
var inst_25953 = (state_25978[(8)]);
var inst_25959 = (function (){var cs = inst_25943;
var vec__25948 = inst_25952;
var v = inst_25953;
var c = inst_25954;
return ((function (cs,vec__25948,v,c,inst_25954,inst_25943,inst_25952,inst_25953,state_val_25979,c__24320__auto___27212,out){
return (function (p1__25930_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25930_SHARP_);
});
;})(cs,vec__25948,v,c,inst_25954,inst_25943,inst_25952,inst_25953,state_val_25979,c__24320__auto___27212,out))
})();
var inst_25960 = cljs.core.filterv(inst_25959,inst_25943);
var inst_25943__$1 = inst_25960;
var state_25978__$1 = (function (){var statearr_26033 = state_25978;
(statearr_26033[(10)] = inst_25943__$1);

return statearr_26033;
})();
var statearr_26034_27222 = state_25978__$1;
(statearr_26034_27222[(2)] = null);

(statearr_26034_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27212,out))
;
return ((function (switch__24064__auto__,c__24320__auto___27212,out){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_26035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26035[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_26035[(1)] = (1));

return statearr_26035;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_25978){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_25978);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e26036){if((e26036 instanceof Object)){
var ex__24068__auto__ = e26036;
var statearr_26037_27223 = state_25978;
(statearr_26037_27223[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27224 = state_25978;
state_25978 = G__27224;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_25978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_25978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27212,out))
})();
var state__24322__auto__ = (function (){var statearr_26038 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_26038[(6)] = c__24320__auto___27212);

return statearr_26038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27212,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26043 = arguments.length;
switch (G__26043) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24320__auto___27226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27226,out){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27226,out){
return (function (state_26071){
var state_val_26072 = (state_26071[(1)]);
if((state_val_26072 === (7))){
var inst_26052 = (state_26071[(7)]);
var inst_26052__$1 = (state_26071[(2)]);
var inst_26054 = (inst_26052__$1 == null);
var inst_26055 = cljs.core.not(inst_26054);
var state_26071__$1 = (function (){var statearr_26077 = state_26071;
(statearr_26077[(7)] = inst_26052__$1);

return statearr_26077;
})();
if(inst_26055){
var statearr_26078_27227 = state_26071__$1;
(statearr_26078_27227[(1)] = (8));

} else {
var statearr_26079_27228 = state_26071__$1;
(statearr_26079_27228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (1))){
var inst_26047 = (0);
var state_26071__$1 = (function (){var statearr_26082 = state_26071;
(statearr_26082[(8)] = inst_26047);

return statearr_26082;
})();
var statearr_26084_27229 = state_26071__$1;
(statearr_26084_27229[(2)] = null);

(statearr_26084_27229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (4))){
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26071__$1,(7),ch);
} else {
if((state_val_26072 === (6))){
var inst_26066 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26085_27230 = state_26071__$1;
(statearr_26085_27230[(2)] = inst_26066);

(statearr_26085_27230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (3))){
var inst_26068 = (state_26071[(2)]);
var inst_26069 = cljs.core.async.close_BANG_(out);
var state_26071__$1 = (function (){var statearr_26087 = state_26071;
(statearr_26087[(9)] = inst_26068);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26071__$1,inst_26069);
} else {
if((state_val_26072 === (2))){
var inst_26047 = (state_26071[(8)]);
var inst_26049 = (inst_26047 < n);
var state_26071__$1 = state_26071;
if(cljs.core.truth_(inst_26049)){
var statearr_26088_27231 = state_26071__$1;
(statearr_26088_27231[(1)] = (4));

} else {
var statearr_26089_27232 = state_26071__$1;
(statearr_26089_27232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (11))){
var inst_26047 = (state_26071[(8)]);
var inst_26058 = (state_26071[(2)]);
var inst_26059 = (inst_26047 + (1));
var inst_26047__$1 = inst_26059;
var state_26071__$1 = (function (){var statearr_26090 = state_26071;
(statearr_26090[(10)] = inst_26058);

(statearr_26090[(8)] = inst_26047__$1);

return statearr_26090;
})();
var statearr_26091_27233 = state_26071__$1;
(statearr_26091_27233[(2)] = null);

(statearr_26091_27233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (9))){
var state_26071__$1 = state_26071;
var statearr_26092_27234 = state_26071__$1;
(statearr_26092_27234[(2)] = null);

(statearr_26092_27234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (5))){
var state_26071__$1 = state_26071;
var statearr_26093_27235 = state_26071__$1;
(statearr_26093_27235[(2)] = null);

(statearr_26093_27235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (10))){
var inst_26063 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26094_27236 = state_26071__$1;
(statearr_26094_27236[(2)] = inst_26063);

(statearr_26094_27236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (8))){
var inst_26052 = (state_26071[(7)]);
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26071__$1,(11),out,inst_26052);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27226,out))
;
return ((function (switch__24064__auto__,c__24320__auto___27226,out){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_26096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26096[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_26096[(1)] = (1));

return statearr_26096;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_26071){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_26071);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e26097){if((e26097 instanceof Object)){
var ex__24068__auto__ = e26097;
var statearr_26102_27237 = state_26071;
(statearr_26102_27237[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27238 = state_26071;
state_26071 = G__27238;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_26071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_26071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27226,out))
})();
var state__24322__auto__ = (function (){var statearr_26107 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_26107[(6)] = c__24320__auto___27226);

return statearr_26107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27226,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26113 = (function (f,ch,meta26114){
this.f = f;
this.ch = ch;
this.meta26114 = meta26114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26115,meta26114__$1){
var self__ = this;
var _26115__$1 = this;
return (new cljs.core.async.t_cljs$core$async26113(self__.f,self__.ch,meta26114__$1));
});

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26115){
var self__ = this;
var _26115__$1 = this;
return self__.meta26114;
});

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26119 = (function (f,ch,meta26114,_,fn1,meta26120){
this.f = f;
this.ch = ch;
this.meta26114 = meta26114;
this._ = _;
this.fn1 = fn1;
this.meta26120 = meta26120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26121,meta26120__$1){
var self__ = this;
var _26121__$1 = this;
return (new cljs.core.async.t_cljs$core$async26119(self__.f,self__.ch,self__.meta26114,self__._,self__.fn1,meta26120__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26121){
var self__ = this;
var _26121__$1 = this;
return self__.meta26120;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26108_SHARP_){
var G__26122 = (((p1__26108_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26108_SHARP_) : self__.f.call(null,p1__26108_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26122) : f1.call(null,G__26122));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26114","meta26114",1949493374,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26113","cljs.core.async/t_cljs$core$async26113",1861323186,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26120","meta26120",2138889341,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26119";

cljs.core.async.t_cljs$core$async26119.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26119");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26119.
 */
cljs.core.async.__GT_t_cljs$core$async26119 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26119(f__$1,ch__$1,meta26114__$1,___$2,fn1__$1,meta26120){
return (new cljs.core.async.t_cljs$core$async26119(f__$1,ch__$1,meta26114__$1,___$2,fn1__$1,meta26120));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26119(self__.f,self__.ch,self__.meta26114,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26148 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26148) : self__.f.call(null,G__26148));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26114","meta26114",1949493374,null)], null);
});

cljs.core.async.t_cljs$core$async26113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26113";

cljs.core.async.t_cljs$core$async26113.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26113");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26113.
 */
cljs.core.async.__GT_t_cljs$core$async26113 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26113(f__$1,ch__$1,meta26114){
return (new cljs.core.async.t_cljs$core$async26113(f__$1,ch__$1,meta26114));
});

}

return (new cljs.core.async.t_cljs$core$async26113(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26178 = (function (f,ch,meta26179){
this.f = f;
this.ch = ch;
this.meta26179 = meta26179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26180,meta26179__$1){
var self__ = this;
var _26180__$1 = this;
return (new cljs.core.async.t_cljs$core$async26178(self__.f,self__.ch,meta26179__$1));
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26180){
var self__ = this;
var _26180__$1 = this;
return self__.meta26179;
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26179","meta26179",-1473937411,null)], null);
});

cljs.core.async.t_cljs$core$async26178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26178";

cljs.core.async.t_cljs$core$async26178.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26178");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26178.
 */
cljs.core.async.__GT_t_cljs$core$async26178 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26178(f__$1,ch__$1,meta26179){
return (new cljs.core.async.t_cljs$core$async26178(f__$1,ch__$1,meta26179));
});

}

return (new cljs.core.async.t_cljs$core$async26178(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26192 = (function (p,ch,meta26193){
this.p = p;
this.ch = ch;
this.meta26193 = meta26193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26194,meta26193__$1){
var self__ = this;
var _26194__$1 = this;
return (new cljs.core.async.t_cljs$core$async26192(self__.p,self__.ch,meta26193__$1));
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26194){
var self__ = this;
var _26194__$1 = this;
return self__.meta26193;
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26193","meta26193",747310214,null)], null);
});

cljs.core.async.t_cljs$core$async26192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26192";

cljs.core.async.t_cljs$core$async26192.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26192");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26192.
 */
cljs.core.async.__GT_t_cljs$core$async26192 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26192(p__$1,ch__$1,meta26193){
return (new cljs.core.async.t_cljs$core$async26192(p__$1,ch__$1,meta26193));
});

}

return (new cljs.core.async.t_cljs$core$async26192(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26210 = arguments.length;
switch (G__26210) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24320__auto___27240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27240,out){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27240,out){
return (function (state_26238){
var state_val_26239 = (state_26238[(1)]);
if((state_val_26239 === (7))){
var inst_26234 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26242_27241 = state_26238__$1;
(statearr_26242_27241[(2)] = inst_26234);

(statearr_26242_27241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (1))){
var state_26238__$1 = state_26238;
var statearr_26245_27242 = state_26238__$1;
(statearr_26245_27242[(2)] = null);

(statearr_26245_27242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (4))){
var inst_26220 = (state_26238[(7)]);
var inst_26220__$1 = (state_26238[(2)]);
var inst_26221 = (inst_26220__$1 == null);
var state_26238__$1 = (function (){var statearr_26247 = state_26238;
(statearr_26247[(7)] = inst_26220__$1);

return statearr_26247;
})();
if(cljs.core.truth_(inst_26221)){
var statearr_26248_27243 = state_26238__$1;
(statearr_26248_27243[(1)] = (5));

} else {
var statearr_26249_27244 = state_26238__$1;
(statearr_26249_27244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (6))){
var inst_26220 = (state_26238[(7)]);
var inst_26225 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26220) : p.call(null,inst_26220));
var state_26238__$1 = state_26238;
if(cljs.core.truth_(inst_26225)){
var statearr_26252_27245 = state_26238__$1;
(statearr_26252_27245[(1)] = (8));

} else {
var statearr_26253_27246 = state_26238__$1;
(statearr_26253_27246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (3))){
var inst_26236 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26238__$1,inst_26236);
} else {
if((state_val_26239 === (2))){
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26238__$1,(4),ch);
} else {
if((state_val_26239 === (11))){
var inst_26228 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26254_27247 = state_26238__$1;
(statearr_26254_27247[(2)] = inst_26228);

(statearr_26254_27247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (9))){
var state_26238__$1 = state_26238;
var statearr_26255_27248 = state_26238__$1;
(statearr_26255_27248[(2)] = null);

(statearr_26255_27248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (5))){
var inst_26223 = cljs.core.async.close_BANG_(out);
var state_26238__$1 = state_26238;
var statearr_26257_27249 = state_26238__$1;
(statearr_26257_27249[(2)] = inst_26223);

(statearr_26257_27249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (10))){
var inst_26231 = (state_26238[(2)]);
var state_26238__$1 = (function (){var statearr_26258 = state_26238;
(statearr_26258[(8)] = inst_26231);

return statearr_26258;
})();
var statearr_26259_27250 = state_26238__$1;
(statearr_26259_27250[(2)] = null);

(statearr_26259_27250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (8))){
var inst_26220 = (state_26238[(7)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26238__$1,(11),out,inst_26220);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27240,out))
;
return ((function (switch__24064__auto__,c__24320__auto___27240,out){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_26261 = [null,null,null,null,null,null,null,null,null];
(statearr_26261[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_26261[(1)] = (1));

return statearr_26261;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_26238){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_26238);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e26262){if((e26262 instanceof Object)){
var ex__24068__auto__ = e26262;
var statearr_26263_27251 = state_26238;
(statearr_26263_27251[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27252 = state_26238;
state_26238 = G__27252;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27240,out))
})();
var state__24322__auto__ = (function (){var statearr_26264 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_26264[(6)] = c__24320__auto___27240);

return statearr_26264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27240,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26266 = arguments.length;
switch (G__26266) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24320__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto__){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto__){
return (function (state_26331){
var state_val_26332 = (state_26331[(1)]);
if((state_val_26332 === (7))){
var inst_26327 = (state_26331[(2)]);
var state_26331__$1 = state_26331;
var statearr_26335_27254 = state_26331__$1;
(statearr_26335_27254[(2)] = inst_26327);

(statearr_26335_27254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (20))){
var inst_26297 = (state_26331[(7)]);
var inst_26308 = (state_26331[(2)]);
var inst_26309 = cljs.core.next(inst_26297);
var inst_26280 = inst_26309;
var inst_26281 = null;
var inst_26282 = (0);
var inst_26283 = (0);
var state_26331__$1 = (function (){var statearr_26336 = state_26331;
(statearr_26336[(8)] = inst_26283);

(statearr_26336[(9)] = inst_26282);

(statearr_26336[(10)] = inst_26308);

(statearr_26336[(11)] = inst_26281);

(statearr_26336[(12)] = inst_26280);

return statearr_26336;
})();
var statearr_26337_27255 = state_26331__$1;
(statearr_26337_27255[(2)] = null);

(statearr_26337_27255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (1))){
var state_26331__$1 = state_26331;
var statearr_26338_27256 = state_26331__$1;
(statearr_26338_27256[(2)] = null);

(statearr_26338_27256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (4))){
var inst_26269 = (state_26331[(13)]);
var inst_26269__$1 = (state_26331[(2)]);
var inst_26270 = (inst_26269__$1 == null);
var state_26331__$1 = (function (){var statearr_26339 = state_26331;
(statearr_26339[(13)] = inst_26269__$1);

return statearr_26339;
})();
if(cljs.core.truth_(inst_26270)){
var statearr_26340_27257 = state_26331__$1;
(statearr_26340_27257[(1)] = (5));

} else {
var statearr_26341_27258 = state_26331__$1;
(statearr_26341_27258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (15))){
var state_26331__$1 = state_26331;
var statearr_26345_27259 = state_26331__$1;
(statearr_26345_27259[(2)] = null);

(statearr_26345_27259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (21))){
var state_26331__$1 = state_26331;
var statearr_26346_27260 = state_26331__$1;
(statearr_26346_27260[(2)] = null);

(statearr_26346_27260[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (13))){
var inst_26283 = (state_26331[(8)]);
var inst_26282 = (state_26331[(9)]);
var inst_26281 = (state_26331[(11)]);
var inst_26280 = (state_26331[(12)]);
var inst_26293 = (state_26331[(2)]);
var inst_26294 = (inst_26283 + (1));
var tmp26342 = inst_26282;
var tmp26343 = inst_26281;
var tmp26344 = inst_26280;
var inst_26280__$1 = tmp26344;
var inst_26281__$1 = tmp26343;
var inst_26282__$1 = tmp26342;
var inst_26283__$1 = inst_26294;
var state_26331__$1 = (function (){var statearr_26347 = state_26331;
(statearr_26347[(8)] = inst_26283__$1);

(statearr_26347[(9)] = inst_26282__$1);

(statearr_26347[(14)] = inst_26293);

(statearr_26347[(11)] = inst_26281__$1);

(statearr_26347[(12)] = inst_26280__$1);

return statearr_26347;
})();
var statearr_26348_27261 = state_26331__$1;
(statearr_26348_27261[(2)] = null);

(statearr_26348_27261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (22))){
var state_26331__$1 = state_26331;
var statearr_26349_27263 = state_26331__$1;
(statearr_26349_27263[(2)] = null);

(statearr_26349_27263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (6))){
var inst_26269 = (state_26331[(13)]);
var inst_26278 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26269) : f.call(null,inst_26269));
var inst_26279 = cljs.core.seq(inst_26278);
var inst_26280 = inst_26279;
var inst_26281 = null;
var inst_26282 = (0);
var inst_26283 = (0);
var state_26331__$1 = (function (){var statearr_26350 = state_26331;
(statearr_26350[(8)] = inst_26283);

(statearr_26350[(9)] = inst_26282);

(statearr_26350[(11)] = inst_26281);

(statearr_26350[(12)] = inst_26280);

return statearr_26350;
})();
var statearr_26351_27264 = state_26331__$1;
(statearr_26351_27264[(2)] = null);

(statearr_26351_27264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (17))){
var inst_26297 = (state_26331[(7)]);
var inst_26301 = cljs.core.chunk_first(inst_26297);
var inst_26302 = cljs.core.chunk_rest(inst_26297);
var inst_26303 = cljs.core.count(inst_26301);
var inst_26280 = inst_26302;
var inst_26281 = inst_26301;
var inst_26282 = inst_26303;
var inst_26283 = (0);
var state_26331__$1 = (function (){var statearr_26355 = state_26331;
(statearr_26355[(8)] = inst_26283);

(statearr_26355[(9)] = inst_26282);

(statearr_26355[(11)] = inst_26281);

(statearr_26355[(12)] = inst_26280);

return statearr_26355;
})();
var statearr_26356_27265 = state_26331__$1;
(statearr_26356_27265[(2)] = null);

(statearr_26356_27265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (3))){
var inst_26329 = (state_26331[(2)]);
var state_26331__$1 = state_26331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26331__$1,inst_26329);
} else {
if((state_val_26332 === (12))){
var inst_26317 = (state_26331[(2)]);
var state_26331__$1 = state_26331;
var statearr_26360_27266 = state_26331__$1;
(statearr_26360_27266[(2)] = inst_26317);

(statearr_26360_27266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (2))){
var state_26331__$1 = state_26331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26331__$1,(4),in$);
} else {
if((state_val_26332 === (23))){
var inst_26325 = (state_26331[(2)]);
var state_26331__$1 = state_26331;
var statearr_26361_27267 = state_26331__$1;
(statearr_26361_27267[(2)] = inst_26325);

(statearr_26361_27267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (19))){
var inst_26312 = (state_26331[(2)]);
var state_26331__$1 = state_26331;
var statearr_26362_27268 = state_26331__$1;
(statearr_26362_27268[(2)] = inst_26312);

(statearr_26362_27268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (11))){
var inst_26280 = (state_26331[(12)]);
var inst_26297 = (state_26331[(7)]);
var inst_26297__$1 = cljs.core.seq(inst_26280);
var state_26331__$1 = (function (){var statearr_26365 = state_26331;
(statearr_26365[(7)] = inst_26297__$1);

return statearr_26365;
})();
if(inst_26297__$1){
var statearr_26367_27269 = state_26331__$1;
(statearr_26367_27269[(1)] = (14));

} else {
var statearr_26368_27270 = state_26331__$1;
(statearr_26368_27270[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (9))){
var inst_26319 = (state_26331[(2)]);
var inst_26320 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26331__$1 = (function (){var statearr_26369 = state_26331;
(statearr_26369[(15)] = inst_26319);

return statearr_26369;
})();
if(cljs.core.truth_(inst_26320)){
var statearr_26370_27271 = state_26331__$1;
(statearr_26370_27271[(1)] = (21));

} else {
var statearr_26371_27272 = state_26331__$1;
(statearr_26371_27272[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (5))){
var inst_26272 = cljs.core.async.close_BANG_(out);
var state_26331__$1 = state_26331;
var statearr_26372_27274 = state_26331__$1;
(statearr_26372_27274[(2)] = inst_26272);

(statearr_26372_27274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (14))){
var inst_26297 = (state_26331[(7)]);
var inst_26299 = cljs.core.chunked_seq_QMARK_(inst_26297);
var state_26331__$1 = state_26331;
if(inst_26299){
var statearr_26373_27275 = state_26331__$1;
(statearr_26373_27275[(1)] = (17));

} else {
var statearr_26374_27276 = state_26331__$1;
(statearr_26374_27276[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (16))){
var inst_26315 = (state_26331[(2)]);
var state_26331__$1 = state_26331;
var statearr_26375_27277 = state_26331__$1;
(statearr_26375_27277[(2)] = inst_26315);

(statearr_26375_27277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26332 === (10))){
var inst_26283 = (state_26331[(8)]);
var inst_26281 = (state_26331[(11)]);
var inst_26291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26281,inst_26283);
var state_26331__$1 = state_26331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26331__$1,(13),out,inst_26291);
} else {
if((state_val_26332 === (18))){
var inst_26297 = (state_26331[(7)]);
var inst_26306 = cljs.core.first(inst_26297);
var state_26331__$1 = state_26331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26331__$1,(20),out,inst_26306);
} else {
if((state_val_26332 === (8))){
var inst_26283 = (state_26331[(8)]);
var inst_26282 = (state_26331[(9)]);
var inst_26285 = (inst_26283 < inst_26282);
var inst_26286 = inst_26285;
var state_26331__$1 = state_26331;
if(cljs.core.truth_(inst_26286)){
var statearr_26378_27278 = state_26331__$1;
(statearr_26378_27278[(1)] = (10));

} else {
var statearr_26379_27279 = state_26331__$1;
(statearr_26379_27279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto__))
;
return ((function (switch__24064__auto__,c__24320__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24065__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24065__auto____0 = (function (){
var statearr_26380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26380[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24065__auto__);

(statearr_26380[(1)] = (1));

return statearr_26380;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24065__auto____1 = (function (state_26331){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_26331);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e26381){if((e26381 instanceof Object)){
var ex__24068__auto__ = e26381;
var statearr_26382_27282 = state_26331;
(statearr_26382_27282[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27283 = state_26331;
state_26331 = G__27283;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24065__auto__ = function(state_26331){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24065__auto____1.call(this,state_26331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24065__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24065__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto__))
})();
var state__24322__auto__ = (function (){var statearr_26383 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_26383[(6)] = c__24320__auto__);

return statearr_26383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto__))
);

return c__24320__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26385 = arguments.length;
switch (G__26385) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26395 = arguments.length;
switch (G__26395) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26401 = arguments.length;
switch (G__26401) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24320__auto___27293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27293,out){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27293,out){
return (function (state_26425){
var state_val_26426 = (state_26425[(1)]);
if((state_val_26426 === (7))){
var inst_26420 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26427_27294 = state_26425__$1;
(statearr_26427_27294[(2)] = inst_26420);

(statearr_26427_27294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (1))){
var inst_26402 = null;
var state_26425__$1 = (function (){var statearr_26428 = state_26425;
(statearr_26428[(7)] = inst_26402);

return statearr_26428;
})();
var statearr_26430_27295 = state_26425__$1;
(statearr_26430_27295[(2)] = null);

(statearr_26430_27295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (4))){
var inst_26405 = (state_26425[(8)]);
var inst_26405__$1 = (state_26425[(2)]);
var inst_26406 = (inst_26405__$1 == null);
var inst_26407 = cljs.core.not(inst_26406);
var state_26425__$1 = (function (){var statearr_26431 = state_26425;
(statearr_26431[(8)] = inst_26405__$1);

return statearr_26431;
})();
if(inst_26407){
var statearr_26432_27305 = state_26425__$1;
(statearr_26432_27305[(1)] = (5));

} else {
var statearr_26433_27306 = state_26425__$1;
(statearr_26433_27306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (6))){
var state_26425__$1 = state_26425;
var statearr_26434_27307 = state_26425__$1;
(statearr_26434_27307[(2)] = null);

(statearr_26434_27307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (3))){
var inst_26422 = (state_26425[(2)]);
var inst_26423 = cljs.core.async.close_BANG_(out);
var state_26425__$1 = (function (){var statearr_26435 = state_26425;
(statearr_26435[(9)] = inst_26422);

return statearr_26435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26425__$1,inst_26423);
} else {
if((state_val_26426 === (2))){
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26425__$1,(4),ch);
} else {
if((state_val_26426 === (11))){
var inst_26405 = (state_26425[(8)]);
var inst_26414 = (state_26425[(2)]);
var inst_26402 = inst_26405;
var state_26425__$1 = (function (){var statearr_26436 = state_26425;
(statearr_26436[(10)] = inst_26414);

(statearr_26436[(7)] = inst_26402);

return statearr_26436;
})();
var statearr_26437_27318 = state_26425__$1;
(statearr_26437_27318[(2)] = null);

(statearr_26437_27318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (9))){
var inst_26405 = (state_26425[(8)]);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26425__$1,(11),out,inst_26405);
} else {
if((state_val_26426 === (5))){
var inst_26405 = (state_26425[(8)]);
var inst_26402 = (state_26425[(7)]);
var inst_26409 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26405,inst_26402);
var state_26425__$1 = state_26425;
if(inst_26409){
var statearr_26441_27323 = state_26425__$1;
(statearr_26441_27323[(1)] = (8));

} else {
var statearr_26442_27325 = state_26425__$1;
(statearr_26442_27325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (10))){
var inst_26417 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26445_27330 = state_26425__$1;
(statearr_26445_27330[(2)] = inst_26417);

(statearr_26445_27330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (8))){
var inst_26402 = (state_26425[(7)]);
var tmp26440 = inst_26402;
var inst_26402__$1 = tmp26440;
var state_26425__$1 = (function (){var statearr_26448 = state_26425;
(statearr_26448[(7)] = inst_26402__$1);

return statearr_26448;
})();
var statearr_26449_27331 = state_26425__$1;
(statearr_26449_27331[(2)] = null);

(statearr_26449_27331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27293,out))
;
return ((function (switch__24064__auto__,c__24320__auto___27293,out){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_26451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26451[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_26451[(1)] = (1));

return statearr_26451;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_26425){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_26425);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e26454){if((e26454 instanceof Object)){
var ex__24068__auto__ = e26454;
var statearr_26456_27332 = state_26425;
(statearr_26456_27332[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27333 = state_26425;
state_26425 = G__27333;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27293,out))
})();
var state__24322__auto__ = (function (){var statearr_26460 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_26460[(6)] = c__24320__auto___27293);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27293,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26462 = arguments.length;
switch (G__26462) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24320__auto___27337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27337,out){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27337,out){
return (function (state_26501){
var state_val_26502 = (state_26501[(1)]);
if((state_val_26502 === (7))){
var inst_26497 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26503_27339 = state_26501__$1;
(statearr_26503_27339[(2)] = inst_26497);

(statearr_26503_27339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (1))){
var inst_26464 = (new Array(n));
var inst_26465 = inst_26464;
var inst_26466 = (0);
var state_26501__$1 = (function (){var statearr_26504 = state_26501;
(statearr_26504[(7)] = inst_26466);

(statearr_26504[(8)] = inst_26465);

return statearr_26504;
})();
var statearr_26505_27340 = state_26501__$1;
(statearr_26505_27340[(2)] = null);

(statearr_26505_27340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (4))){
var inst_26469 = (state_26501[(9)]);
var inst_26469__$1 = (state_26501[(2)]);
var inst_26470 = (inst_26469__$1 == null);
var inst_26471 = cljs.core.not(inst_26470);
var state_26501__$1 = (function (){var statearr_26506 = state_26501;
(statearr_26506[(9)] = inst_26469__$1);

return statearr_26506;
})();
if(inst_26471){
var statearr_26507_27341 = state_26501__$1;
(statearr_26507_27341[(1)] = (5));

} else {
var statearr_26508_27342 = state_26501__$1;
(statearr_26508_27342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (15))){
var inst_26491 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26509_27343 = state_26501__$1;
(statearr_26509_27343[(2)] = inst_26491);

(statearr_26509_27343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (13))){
var state_26501__$1 = state_26501;
var statearr_26510_27344 = state_26501__$1;
(statearr_26510_27344[(2)] = null);

(statearr_26510_27344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (6))){
var inst_26466 = (state_26501[(7)]);
var inst_26487 = (inst_26466 > (0));
var state_26501__$1 = state_26501;
if(cljs.core.truth_(inst_26487)){
var statearr_26511_27345 = state_26501__$1;
(statearr_26511_27345[(1)] = (12));

} else {
var statearr_26512_27346 = state_26501__$1;
(statearr_26512_27346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (3))){
var inst_26499 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26501__$1,inst_26499);
} else {
if((state_val_26502 === (12))){
var inst_26465 = (state_26501[(8)]);
var inst_26489 = cljs.core.vec(inst_26465);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26501__$1,(15),out,inst_26489);
} else {
if((state_val_26502 === (2))){
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26501__$1,(4),ch);
} else {
if((state_val_26502 === (11))){
var inst_26481 = (state_26501[(2)]);
var inst_26482 = (new Array(n));
var inst_26465 = inst_26482;
var inst_26466 = (0);
var state_26501__$1 = (function (){var statearr_26521 = state_26501;
(statearr_26521[(10)] = inst_26481);

(statearr_26521[(7)] = inst_26466);

(statearr_26521[(8)] = inst_26465);

return statearr_26521;
})();
var statearr_26526_27348 = state_26501__$1;
(statearr_26526_27348[(2)] = null);

(statearr_26526_27348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (9))){
var inst_26465 = (state_26501[(8)]);
var inst_26479 = cljs.core.vec(inst_26465);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26501__$1,(11),out,inst_26479);
} else {
if((state_val_26502 === (5))){
var inst_26469 = (state_26501[(9)]);
var inst_26466 = (state_26501[(7)]);
var inst_26465 = (state_26501[(8)]);
var inst_26474 = (state_26501[(11)]);
var inst_26473 = (inst_26465[inst_26466] = inst_26469);
var inst_26474__$1 = (inst_26466 + (1));
var inst_26475 = (inst_26474__$1 < n);
var state_26501__$1 = (function (){var statearr_26527 = state_26501;
(statearr_26527[(12)] = inst_26473);

(statearr_26527[(11)] = inst_26474__$1);

return statearr_26527;
})();
if(cljs.core.truth_(inst_26475)){
var statearr_26528_27349 = state_26501__$1;
(statearr_26528_27349[(1)] = (8));

} else {
var statearr_26529_27350 = state_26501__$1;
(statearr_26529_27350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (14))){
var inst_26494 = (state_26501[(2)]);
var inst_26495 = cljs.core.async.close_BANG_(out);
var state_26501__$1 = (function (){var statearr_26531 = state_26501;
(statearr_26531[(13)] = inst_26494);

return statearr_26531;
})();
var statearr_26532_27351 = state_26501__$1;
(statearr_26532_27351[(2)] = inst_26495);

(statearr_26532_27351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (10))){
var inst_26485 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26533_27352 = state_26501__$1;
(statearr_26533_27352[(2)] = inst_26485);

(statearr_26533_27352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (8))){
var inst_26465 = (state_26501[(8)]);
var inst_26474 = (state_26501[(11)]);
var tmp26530 = inst_26465;
var inst_26465__$1 = tmp26530;
var inst_26466 = inst_26474;
var state_26501__$1 = (function (){var statearr_26534 = state_26501;
(statearr_26534[(7)] = inst_26466);

(statearr_26534[(8)] = inst_26465__$1);

return statearr_26534;
})();
var statearr_26535_27353 = state_26501__$1;
(statearr_26535_27353[(2)] = null);

(statearr_26535_27353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27337,out))
;
return ((function (switch__24064__auto__,c__24320__auto___27337,out){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_26536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26536[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_26536[(1)] = (1));

return statearr_26536;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_26501){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_26501);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e26537){if((e26537 instanceof Object)){
var ex__24068__auto__ = e26537;
var statearr_26538_27354 = state_26501;
(statearr_26538_27354[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27355 = state_26501;
state_26501 = G__27355;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_26501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_26501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27337,out))
})();
var state__24322__auto__ = (function (){var statearr_26539 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_26539[(6)] = c__24320__auto___27337);

return statearr_26539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27337,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26542 = arguments.length;
switch (G__26542) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24320__auto___27357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24320__auto___27357,out){
return (function (){
var f__24321__auto__ = (function (){var switch__24064__auto__ = ((function (c__24320__auto___27357,out){
return (function (state_26587){
var state_val_26588 = (state_26587[(1)]);
if((state_val_26588 === (7))){
var inst_26583 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26591_27358 = state_26587__$1;
(statearr_26591_27358[(2)] = inst_26583);

(statearr_26591_27358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (1))){
var inst_26543 = [];
var inst_26544 = inst_26543;
var inst_26545 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26587__$1 = (function (){var statearr_26592 = state_26587;
(statearr_26592[(7)] = inst_26544);

(statearr_26592[(8)] = inst_26545);

return statearr_26592;
})();
var statearr_26593_27359 = state_26587__$1;
(statearr_26593_27359[(2)] = null);

(statearr_26593_27359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (4))){
var inst_26548 = (state_26587[(9)]);
var inst_26548__$1 = (state_26587[(2)]);
var inst_26549 = (inst_26548__$1 == null);
var inst_26550 = cljs.core.not(inst_26549);
var state_26587__$1 = (function (){var statearr_26596 = state_26587;
(statearr_26596[(9)] = inst_26548__$1);

return statearr_26596;
})();
if(inst_26550){
var statearr_26597_27360 = state_26587__$1;
(statearr_26597_27360[(1)] = (5));

} else {
var statearr_26599_27361 = state_26587__$1;
(statearr_26599_27361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (15))){
var inst_26577 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26603_27362 = state_26587__$1;
(statearr_26603_27362[(2)] = inst_26577);

(statearr_26603_27362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (13))){
var state_26587__$1 = state_26587;
var statearr_26604_27363 = state_26587__$1;
(statearr_26604_27363[(2)] = null);

(statearr_26604_27363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (6))){
var inst_26544 = (state_26587[(7)]);
var inst_26569 = inst_26544.length;
var inst_26573 = (inst_26569 > (0));
var state_26587__$1 = state_26587;
if(cljs.core.truth_(inst_26573)){
var statearr_26605_27364 = state_26587__$1;
(statearr_26605_27364[(1)] = (12));

} else {
var statearr_26607_27365 = state_26587__$1;
(statearr_26607_27365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (3))){
var inst_26585 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26587__$1,inst_26585);
} else {
if((state_val_26588 === (12))){
var inst_26544 = (state_26587[(7)]);
var inst_26575 = cljs.core.vec(inst_26544);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26587__$1,(15),out,inst_26575);
} else {
if((state_val_26588 === (2))){
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26587__$1,(4),ch);
} else {
if((state_val_26588 === (11))){
var inst_26552 = (state_26587[(10)]);
var inst_26548 = (state_26587[(9)]);
var inst_26562 = (state_26587[(2)]);
var inst_26563 = [];
var inst_26564 = inst_26563.push(inst_26548);
var inst_26544 = inst_26563;
var inst_26545 = inst_26552;
var state_26587__$1 = (function (){var statearr_26610 = state_26587;
(statearr_26610[(11)] = inst_26564);

(statearr_26610[(7)] = inst_26544);

(statearr_26610[(8)] = inst_26545);

(statearr_26610[(12)] = inst_26562);

return statearr_26610;
})();
var statearr_26613_27366 = state_26587__$1;
(statearr_26613_27366[(2)] = null);

(statearr_26613_27366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (9))){
var inst_26544 = (state_26587[(7)]);
var inst_26560 = cljs.core.vec(inst_26544);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26587__$1,(11),out,inst_26560);
} else {
if((state_val_26588 === (5))){
var inst_26545 = (state_26587[(8)]);
var inst_26552 = (state_26587[(10)]);
var inst_26548 = (state_26587[(9)]);
var inst_26552__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26548) : f.call(null,inst_26548));
var inst_26553 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26552__$1,inst_26545);
var inst_26554 = cljs.core.keyword_identical_QMARK_(inst_26545,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26555 = ((inst_26553) || (inst_26554));
var state_26587__$1 = (function (){var statearr_26615 = state_26587;
(statearr_26615[(10)] = inst_26552__$1);

return statearr_26615;
})();
if(cljs.core.truth_(inst_26555)){
var statearr_26616_27367 = state_26587__$1;
(statearr_26616_27367[(1)] = (8));

} else {
var statearr_26617_27368 = state_26587__$1;
(statearr_26617_27368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (14))){
var inst_26580 = (state_26587[(2)]);
var inst_26581 = cljs.core.async.close_BANG_(out);
var state_26587__$1 = (function (){var statearr_26620 = state_26587;
(statearr_26620[(13)] = inst_26580);

return statearr_26620;
})();
var statearr_26621_27369 = state_26587__$1;
(statearr_26621_27369[(2)] = inst_26581);

(statearr_26621_27369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (10))){
var inst_26567 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26622_27370 = state_26587__$1;
(statearr_26622_27370[(2)] = inst_26567);

(statearr_26622_27370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (8))){
var inst_26544 = (state_26587[(7)]);
var inst_26552 = (state_26587[(10)]);
var inst_26548 = (state_26587[(9)]);
var inst_26557 = inst_26544.push(inst_26548);
var tmp26618 = inst_26544;
var inst_26544__$1 = tmp26618;
var inst_26545 = inst_26552;
var state_26587__$1 = (function (){var statearr_26623 = state_26587;
(statearr_26623[(7)] = inst_26544__$1);

(statearr_26623[(8)] = inst_26545);

(statearr_26623[(14)] = inst_26557);

return statearr_26623;
})();
var statearr_26624_27371 = state_26587__$1;
(statearr_26624_27371[(2)] = null);

(statearr_26624_27371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24320__auto___27357,out))
;
return ((function (switch__24064__auto__,c__24320__auto___27357,out){
return (function() {
var cljs$core$async$state_machine__24065__auto__ = null;
var cljs$core$async$state_machine__24065__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26625[(0)] = cljs$core$async$state_machine__24065__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var cljs$core$async$state_machine__24065__auto____1 = (function (state_26587){
while(true){
var ret_value__24066__auto__ = (function (){try{while(true){
var result__24067__auto__ = switch__24064__auto__(state_26587);
if(cljs.core.keyword_identical_QMARK_(result__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24067__auto__;
}
break;
}
}catch (e26626){if((e26626 instanceof Object)){
var ex__24068__auto__ = e26626;
var statearr_26628_27372 = state_26587;
(statearr_26628_27372[(5)] = ex__24068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27373 = state_26587;
state_26587 = G__27373;
continue;
} else {
return ret_value__24066__auto__;
}
break;
}
});
cljs$core$async$state_machine__24065__auto__ = function(state_26587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24065__auto____1.call(this,state_26587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24065__auto____0;
cljs$core$async$state_machine__24065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24065__auto____1;
return cljs$core$async$state_machine__24065__auto__;
})()
;})(switch__24064__auto__,c__24320__auto___27357,out))
})();
var state__24322__auto__ = (function (){var statearr_26630 = (f__24321__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24321__auto__.cljs$core$IFn$_invoke$arity$0() : f__24321__auto__.call(null));
(statearr_26630[(6)] = c__24320__auto___27357);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24322__auto__);
});})(c__24320__auto___27357,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
