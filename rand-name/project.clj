(defproject function "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main function.main
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [metosin/reitit "0.3.7"]

                 ;Backend-side
                 [hiccup "1.0.5"]
                 [ring/ring-jetty-adapter "1.8.0"]]



  :plugins [[lein-shadow "0.1.6"]]
  :ring {:handler function.handler/app}
  :clean-targets ^{:protect false}
  [:target-path
   "resources/public/js/"
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc" "src/cljs"]
  :resource-paths ["resources" "target/cljsbuild"]
  :profiles {:uberjar {:source-paths ["src/function/clj"]
                       :aot :all
                       :omit-source true}}

  :uberjar-name "function.jar")
