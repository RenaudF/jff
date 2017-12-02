$(function () {
	let currency_pairs = ['btcusd','btceur','eurusd','xrpusd','xrpeur','xrpbtc','ltcusd','ltceur','ltcbtc','ethusd','etheur','ethbtc']

/**
last       Last BTC price.
high       Last 24 hours price high.
low        Last 24 hours price low.
vwap       Last 24 hours volume weighted average price.
volume     Last 24 hours volume.
bid        Highest buy order.
ask        Lowest sell order.
timestamp  Unix timestamp date and time.
open       First price of the day.
*/
	function get24HTicker(currency_pair) {
		$.getJSON('https://www.bitstamp.net/api/v2/ticker/'+currency_pair, function (data) {

		})
	}
	function get1HTicker(currency_pair) {
		$.getJSON('https://www.bitstamp.net/api/v2/ticker_hour/'+currency_pair, function (data) {

		})
	}

/**
bids
asks
*/
	function getOrderBook(currency_pair) {
		$.getJSON('https://www.bitstamp.net/api/v2/order_book/'+currency_pair, function (data) {

		});
	}

	let pusher = new Pusher('de504dc5763aeef9ff52');
	let channels = ['diff_order_book', 'order_book', 'live_orders', 'live_trades']

	function snoop(channel, callback) {
		pusher.subscribe(channel).bind('data', callback);
	}

	// let diffOrderBookChannel = pusher.subscribe('diff_order_book');
	// diffOrderBookChannel.bind('data', function (data) {

	// });

	// let orderBookChannel = pusher.subscribe('order_book');
	// orderBookChannel.bind('data', function (data) {

	// });

	// let liveOrdersChannel = pusher.subscribe('live_orders');
	// liveOrdersChannel.bind('data', function (data) {

	// });

	// let liveTradesChannel = pusher.subscribe('live_trades');
	// liveTradesChannel.bind('data', function (data) {

	// });
});