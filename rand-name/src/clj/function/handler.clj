(ns function.handler
    (:require
      [hiccup.page :refer [include-js include-css html5]]
      [reitit.ring :as reitit-ring]))

(defn request-wrap [status content-type body]
      "wrap request with status and headers"
      {:status status
       :headers {"Content-Type" content-type}
       :body body})

(defn text-wrap [content]
      "Wrap Html"
      (request-wrap 200 "text/plain" content))

(def names
  ["John" "Bela" "Ramazotti" "Bullock" "Columbo" "Justin" "Natasha" "Vlagyivosztok"])

(def app
  (do
    (reitit-ring/ring-handler
      (reitit-ring/router
        [["/" {:get {:handler (fn [req] (text-wrap (rand-nth names)))}}]])

      (reitit-ring/routes
        (reitit-ring/create-resource-handler {:path "/" :root "/public"})
        (reitit-ring/create-default-handler))
      {:middleware
       []})));ring.middleware.keyword-params/wrap-keyword-params]})))
  ;      ring.middleware.params/wrap-params]})))
  ;      #(wrap-transit-params % {:opts {}})
  ;      #(wrap-authentication % backend)
  ;      #(wrap-authorization % backend)
  ;      #(wrap-defaults % (assoc-in site-defaults [:security :anti-forgery] true))
  ;      #(wrap-shop-id %)]})))