var fallback_data = {"AAPL":{"2017-11-24":"174.9700","2017-11-22":"174.9600","2017-11-21":"173.1400","2017-11-20":"169.9800","2017-11-17":"170.1500","2017-11-16":"171.1000","2017-11-15":"169.0800","2017-11-14":"171.3400","2017-11-13":"173.9700","2017-11-10":"174.6700","2017-11-09":"175.8800","2017-11-08":"176.2400","2017-11-07":"174.8100","2017-11-06":"174.2500","2017-11-03":"172.5000","2017-11-02":"168.1100","2017-11-01":"166.8900","2017-10-31":"169.0400","2017-10-30":"166.7200","2017-10-27":"163.0500","2017-10-26":"157.4100","2017-10-25":"156.4100","2017-10-24":"157.1000","2017-10-23":"156.1700","2017-10-20":"156.2500","2017-10-19":"155.9800","2017-10-18":"159.7600","2017-10-17":"160.4700","2017-10-16":"159.8800","2017-10-13":"156.9900","2017-10-12":"156.0000","2017-10-11":"156.5500","2017-10-10":"155.9000","2017-10-09":"155.8400","2017-10-06":"155.3000","2017-10-05":"155.3900","2017-10-04":"153.4800","2017-10-03":"154.4800","2017-10-02":"153.8100","2017-09-29":"154.1200","2017-09-28":"153.2800","2017-09-27":"154.2300","2017-09-26":"153.1400","2017-09-25":"150.5500","2017-09-22":"151.8900","2017-09-21":"153.3900","2017-09-20":"156.0700","2017-09-19":"158.7300","2017-09-18":"158.6700","2017-09-15":"159.8800","2017-09-14":"158.2800","2017-09-13":"159.6500","2017-09-12":"160.8600","2017-09-11":"161.5000","2017-09-08":"158.6300","2017-09-07":"161.2600","2017-09-06":"161.9100","2017-09-05":"162.0800","2017-09-01":"164.0500","2017-08-31":"164.0000","2017-08-30":"163.3500","2017-08-29":"162.9100","2017-08-28":"161.4700","2017-08-25":"159.8600","2017-08-24":"159.2700","2017-08-23":"159.9800","2017-08-22":"159.7800","2017-08-21":"157.2100","2017-08-18":"157.5000","2017-08-17":"157.8600","2017-08-16":"160.9500","2017-08-15":"161.6000","2017-08-14":"159.8500","2017-08-11":"157.4800","2017-08-10":"155.3200","2017-08-09":"161.0600","2017-08-08":"160.0800","2017-08-07":"158.8100","2017-08-04":"156.3900","2017-08-03":"155.5700","2017-08-02":"157.1400","2017-08-01":"150.0500","2017-07-31":"148.7300","2017-07-28":"149.5000","2017-07-27":"150.5600","2017-07-26":"153.4600","2017-07-25":"152.7400","2017-07-24":"152.0900","2017-07-21":"150.2700","2017-07-20":"150.3400","2017-07-19":"151.0200","2017-07-18":"150.0800","2017-07-17":"149.5600","2017-07-14":"149.0400","2017-07-13":"147.7700","2017-07-12":"145.7400","2017-07-11":"145.5300","2017-07-10":"145.0600","2017-07-07":"144.1800","2017-07-06":"142.7300","2017-08-26":"159.8600","2017-08-27":"159.8600","2017-09-02":"164.0500","2017-09-03":"164.0500","2017-09-04":"164.0500","2017-09-09":"158.6300","2017-09-10":"158.6300","2017-09-16":"159.8800","2017-09-17":"159.8800","2017-09-23":"151.8900","2017-09-24":"151.8900","2017-09-30":"154.1200","2017-10-01":"154.1200","2017-10-07":"155.3000","2017-10-08":"155.3000","2017-10-14":"156.9900","2017-10-15":"156.9900","2017-10-21":"156.2500","2017-10-22":"156.2500","2017-10-28":"163.0500","2017-10-29":"163.0500","2017-11-04":"172.5000"},"AMZN":{"2017-11-24":"1186.0000","2017-11-22":"1156.1600","2017-11-21":"1139.4900","2017-11-20":"1126.3100","2017-11-17":"1129.8800","2017-11-16":"1137.2900","2017-11-15":"1126.6900","2017-11-14":"1136.8400","2017-11-13":"1129.1700","2017-11-10":"1125.3500","2017-11-09":"1129.1300","2017-11-08":"1132.8800","2017-11-07":"1123.1700","2017-11-06":"1120.6600","2017-11-03":"1111.6000","2017-11-02":"1094.2200","2017-11-01":"1103.6800","2017-10-31":"1105.2800","2017-10-30":"1110.8500","2017-10-27":"1100.9500","2017-10-26":"972.4300","2017-10-25":"972.9100","2017-10-24":"975.9000","2017-10-23":"966.3000","2017-10-20":"982.9100","2017-10-19":"986.6100","2017-10-18":"997.0000","2017-10-17":"1009.1300","2017-10-16":"1006.3400","2017-10-13":"1002.9400","2017-10-12":"1000.9300","2017-10-11":"995.0000","2017-10-10":"987.2000","2017-10-09":"990.9900","2017-10-06":"989.5800","2017-10-05":"980.8500","2017-10-04":"965.4500","2017-10-03":"957.1000","2017-10-02":"959.1900","2017-09-29":"961.3500","2017-09-28":"956.4000","2017-09-27":"950.8700","2017-09-26":"938.6000","2017-09-25":"939.7900","2017-09-22":"955.1000","2017-09-21":"964.6500","2017-09-20":"973.2100","2017-09-19":"969.8600","2017-09-18":"974.1900","2017-09-15":"986.7900","2017-09-14":"992.2100","2017-09-13":"999.6000","2017-09-12":"982.5800","2017-09-11":"977.9600","2017-09-08":"965.9000","2017-09-07":"979.4700","2017-09-06":"967.8000","2017-09-05":"965.2700","2017-09-01":"978.2500","2017-08-31":"980.6000","2017-08-30":"967.5900","2017-08-29":"954.0600","2017-08-28":"946.0200","2017-08-25":"945.2600","2017-08-24":"952.4500","2017-08-23":"958.0000","2017-08-22":"966.9000","2017-08-21":"953.2900","2017-08-18":"958.4700","2017-08-17":"960.5700","2017-08-16":"978.1800","2017-08-15":"982.7400","2017-08-14":"983.3000","2017-08-11":"967.9900","2017-08-10":"956.9200","2017-08-09":"982.0100","2017-08-08":"989.8400","2017-08-07":"992.2700","2017-08-04":"987.5800","2017-08-03":"986.9200","2017-08-02":"995.8900","2017-08-01":"996.1900","2017-07-31":"987.7800","2017-07-28":"1020.0400","2017-07-27":"1046.0000","2017-07-26":"1052.8000","2017-07-25":"1039.8700","2017-07-24":"1038.9500","2017-07-21":"1025.6700","2017-07-20":"1028.7000","2017-07-19":"1026.8700","2017-07-18":"1024.4500","2017-07-17":"1010.0400","2017-07-14":"1001.8100","2017-07-13":"1000.6300","2017-07-12":"1006.5100","2017-07-11":"994.1300","2017-07-10":"996.4700","2017-07-07":"978.7600","2017-07-06":"965.1400","2017-08-26":"945.2600","2017-08-27":"945.2600","2017-09-02":"978.2500","2017-09-03":"978.2500","2017-09-04":"978.2500","2017-09-09":"965.9000","2017-09-10":"965.9000","2017-09-16":"986.7900","2017-09-17":"986.7900","2017-09-23":"955.1000","2017-09-24":"955.1000","2017-09-30":"961.3500","2017-10-01":"961.3500","2017-10-07":"989.5800","2017-10-08":"989.5800","2017-10-14":"1002.9400","2017-10-15":"1002.9400","2017-10-21":"982.9100","2017-10-22":"982.9100","2017-10-28":"1100.9500","2017-10-29":"1100.9500","2017-11-04":"1111.6000"},"DIS":{"2017-11-24":"102.6400","2017-11-22":"102.7400","2017-11-21":"103.0000","2017-11-20":"102.7500","2017-11-17":"103.4400","2017-11-16":"103.6000","2017-11-15":"103.6900","2017-11-14":"103.1700","2017-11-13":"104.7400","2017-11-10":"104.7800","2017-11-09":"102.6800","2017-11-08":"101.1800","2017-11-07":"101.6100","2017-11-06":"100.6400","2017-11-03":"98.6400","2017-11-02":"98.3500","2017-11-01":"99.0300","2017-10-31":"97.8100","2017-10-30":"98.0400","2017-10-27":"98.3100","2017-10-26":"98.5600","2017-10-25":"97.8000","2017-10-24":"98.2900","2017-10-23":"98.7000","2017-10-20":"99.4000","2017-10-19":"99.0100","2017-10-18":"98.2500","2017-10-17":"98.3600","2017-10-16":"98.1300","2017-10-13":"97.3800","2017-10-12":"96.9300","2017-10-11":"98.5500","2017-10-10":"99.5800","2017-10-09":"99.5700","2017-10-06":"100.0700","2017-10-05":"100.1100","2017-10-04":"100.5500","2017-10-03":"100.7900","2017-10-02":"99.8600","2017-09-29":"98.5700","2017-09-28":"98.0500","2017-09-27":"99.2400","2017-09-26":"98.6300","2017-09-25":"99.5700","2017-09-22":"98.6000","2017-09-21":"98.8900","2017-09-20":"99.2100","2017-09-19":"98.4300","2017-09-18":"98.1000","2017-09-15":"98.5200","2017-09-14":"97.9000","2017-09-13":"98.8200","2017-09-12":"97.8900","2017-09-11":"97.0900","2017-09-08":"97.0700","2017-09-07":"97.0600","2017-09-06":"101.5000","2017-09-05":"101.6000","2017-09-01":"101.5000","2017-08-31":"101.2000","2017-08-30":"102.8700","2017-08-29":"102.5700","2017-08-28":"102.5600","2017-08-25":"102.4100","2017-08-24":"101.5200","2017-08-23":"101.5000","2017-08-22":"102.7700","2017-08-21":"101.1700","2017-08-18":"100.7000","2017-08-17":"101.3800","2017-08-16":"102.2000","2017-08-15":"101.5100","2017-08-14":"101.4000","2017-08-11":"101.9900","2017-08-10":"101.3500","2017-08-09":"102.8300","2017-08-08":"106.9800","2017-08-07":"106.3500","2017-08-04":"107.6900","2017-08-03":"109.1200","2017-08-02":"108.6700","2017-08-01":"110.6100","2017-07-31":"109.9300","2017-07-28":"109.9600","2017-07-27":"110.0000","2017-07-26":"106.9400","2017-07-25":"106.4200","2017-07-24":"107.0000","2017-07-21":"107.0900","2017-07-20":"107.3600","2017-07-19":"106.8200","2017-07-18":"105.7500","2017-07-17":"104.7900","2017-07-14":"105.0900","2017-07-13":"104.2900","2017-07-12":"104.3800","2017-07-11":"103.8400","2017-07-10":"103.5900","2017-07-07":"103.3200","2017-07-06":"103.3500","2017-08-26":"102.4100","2017-08-27":"102.4100","2017-09-02":"101.5000","2017-09-03":"101.5000","2017-09-04":"101.5000","2017-09-09":"97.0700","2017-09-10":"97.0700","2017-09-16":"98.5200","2017-09-17":"98.5200","2017-09-23":"98.6000","2017-09-24":"98.6000","2017-09-30":"98.5700","2017-10-01":"98.5700","2017-10-07":"100.0700","2017-10-08":"100.0700","2017-10-14":"97.3800","2017-10-15":"97.3800","2017-10-21":"99.4000","2017-10-22":"99.4000","2017-10-28":"98.3100","2017-10-29":"98.3100","2017-11-04":"98.6400"},"FANG":{"2017-11-24":"110.3000","2017-11-22":"109.2500","2017-11-21":"109.1500","2017-11-20":"107.9700","2017-11-17":"107.5400","2017-11-16":"106.5300","2017-11-15":"106.6200","2017-11-14":"108.2700","2017-11-13":"110.9700","2017-11-10":"111.8600","2017-11-09":"111.0300","2017-11-08":"110.0400","2017-11-07":"111.8000","2017-11-06":"113.6900","2017-11-03":"111.1500","2017-11-02":"108.9700","2017-11-01":"109.7800","2017-10-31":"107.1600","2017-10-30":"106.2000","2017-10-27":"104.5700","2017-10-26":"100.8800","2017-10-25":"100.8900","2017-10-24":"99.6700","2017-10-23":"100.3500","2017-10-20":"102.5300","2017-10-19":"101.5900","2017-10-18":"102.1900","2017-10-17":"102.6100","2017-10-16":"102.6000","2017-10-13":"101.3700","2017-10-12":"101.1200","2017-10-11":"101.5200","2017-10-10":"100.7600","2017-10-09":"99.9400","2017-10-06":"99.0900","2017-10-05":"99.7500","2017-10-04":"100.7500","2017-10-03":"100.0800","2017-10-02":"100.0000","2017-09-29":"97.9600","2017-09-28":"97.1400","2017-09-27":"96.8800","2017-09-26":"97.1500","2017-09-25":"96.7800","2017-09-22":"95.7400","2017-09-21":"97.3600","2017-09-20":"97.3200","2017-09-19":"94.2800","2017-09-18":"95.1500","2017-09-15":"93.9700","2017-09-14":"93.8100","2017-09-13":"93.4900","2017-09-12":"90.4100","2017-09-11":"89.4500","2017-09-08":"88.9000","2017-09-07":"91.6200","2017-09-06":"92.6600","2017-09-05":"91.7400","2017-09-01":"91.9200","2017-08-31":"90.7900","2017-08-30":"88.4700","2017-08-29":"88.1700","2017-08-28":"88.0300","2017-08-25":"88.7400","2017-08-24":"89.1200","2017-08-23":"88.8600","2017-08-22":"87.4300","2017-08-21":"87.0800","2017-08-18":"87.2600","2017-08-17":"86.1000","2017-08-16":"88.0600","2017-08-15":"88.0200","2017-08-14":"90.7500","2017-08-11":"92.8700","2017-08-10":"92.0600","2017-08-09":"94.5800","2017-08-08":"94.9800","2017-08-07":"96.0400","2017-08-04":"95.2100","2017-08-03":"89.6900","2017-08-02":"95.8400","2017-08-01":"95.3500","2017-07-31":"95.8800","2017-07-28":"96.6500","2017-07-27":"96.5700","2017-07-26":"96.4800","2017-07-25":"95.7200","2017-07-24":"93.2100","2017-07-21":"91.9900","2017-07-20":"92.3800","2017-07-19":"93.9300","2017-07-18":"90.4100","2017-07-17":"90.4700","2017-07-14":"90.4800","2017-07-13":"89.4200","2017-07-12":"88.1100","2017-07-11":"88.6200","2017-07-10":"88.0300","2017-07-07":"86.0900","2017-07-06":"85.9600","2017-08-26":"88.7400","2017-08-27":"88.7400","2017-09-02":"91.9200","2017-09-03":"91.9200","2017-09-04":"91.9200","2017-09-09":"88.9000","2017-09-10":"88.9000","2017-09-16":"93.9700","2017-09-17":"93.9700","2017-09-23":"95.7400","2017-09-24":"95.7400","2017-09-30":"97.9600","2017-10-01":"97.9600","2017-10-07":"99.0900","2017-10-08":"99.0900","2017-10-14":"101.3700","2017-10-15":"101.3700","2017-10-21":"102.5300","2017-10-22":"102.5300","2017-10-28":"104.5700","2017-10-29":"104.5700","2017-11-04":"111.1500"},"GOOG":{"2017-11-24":"1040.6100","2017-11-22":"1035.9600","2017-11-21":"1034.4900","2017-11-20":"1018.3800","2017-11-17":"1019.0900","2017-11-16":"1032.5000","2017-11-15":"1020.9100","2017-11-14":"1026.0000","2017-11-13":"1025.7500","2017-11-10":"1028.0700","2017-11-09":"1031.2600","2017-11-08":"1039.8500","2017-11-07":"1033.3300","2017-11-06":"1025.9000","2017-11-03":"1032.4800","2017-11-02":"1025.5800","2017-11-01":"1025.5000","2017-10-31":"1016.6400","2017-10-30":"1017.1100","2017-10-27":"1019.2700","2017-10-26":"972.5600","2017-10-25":"973.3300","2017-10-24":"970.5400","2017-10-23":"968.4500","2017-10-20":"988.2000","2017-10-19":"984.4500","2017-10-18":"992.8100","2017-10-17":"992.1800","2017-10-16":"992.0000","2017-10-13":"989.6800","2017-10-12":"987.8300","2017-10-11":"989.2500","2017-10-10":"972.6000","2017-10-09":"977.0000","2017-10-06":"978.8900","2017-10-05":"969.9600","2017-10-04":"951.6800","2017-10-03":"957.7900","2017-10-02":"953.2700","2017-09-29":"959.1100","2017-09-28":"949.5000","2017-09-27":"944.4900","2017-09-26":"924.8600","2017-09-25":"920.9700","2017-09-22":"928.5300","2017-09-21":"932.4500","2017-09-20":"931.5800","2017-09-19":"921.8100","2017-09-18":"915.0000","2017-09-15":"920.2900","2017-09-14":"925.1100","2017-09-13":"935.0900","2017-09-12":"932.0700","2017-09-11":"929.0800","2017-09-08":"926.5000","2017-09-07":"935.9500","2017-09-06":"927.8100","2017-09-05":"928.4500","2017-09-01":"937.3400","2017-08-31":"939.3300","2017-08-30":"929.5700","2017-08-29":"921.2900","2017-08-28":"913.8100","2017-08-25":"915.8900","2017-08-24":"921.2800","2017-08-23":"927.0000","2017-08-22":"924.6900","2017-08-21":"906.6600","2017-08-18":"910.6700","2017-08-17":"910.9800","2017-08-16":"926.9600","2017-08-15":"922.2200","2017-08-14":"922.6700","2017-08-11":"914.3900","2017-08-10":"907.2400","2017-08-09":"922.9000","2017-08-08":"926.7900","2017-08-07":"929.3600","2017-08-04":"927.9600","2017-08-03":"923.6500","2017-08-02":"930.3900","2017-08-01":"930.8300","2017-07-31":"930.5000","2017-07-28":"941.5300","2017-07-27":"934.0900","2017-07-26":"947.8000","2017-07-25":"950.7000","2017-07-24":"980.3400","2017-07-21":"972.9200","2017-07-20":"968.1500","2017-07-19":"970.8900","2017-07-18":"965.4000","2017-07-17":"953.4200","2017-07-14":"955.9900","2017-07-13":"947.1600","2017-07-12":"943.8300","2017-07-11":"930.0900","2017-07-10":"928.8000","2017-07-07":"918.5900","2017-07-06":"906.6900","2017-08-26":"915.8900","2017-08-27":"915.8900","2017-09-02":"937.3400","2017-09-03":"937.3400","2017-09-04":"937.3400","2017-09-09":"926.5000","2017-09-10":"926.5000","2017-09-16":"920.2900","2017-09-17":"920.2900","2017-09-23":"928.5300","2017-09-24":"928.5300","2017-09-30":"959.1100","2017-10-01":"959.1100","2017-10-07":"978.8900","2017-10-08":"978.8900","2017-10-14":"989.6800","2017-10-15":"989.6800","2017-10-21":"988.2000","2017-10-22":"988.2000","2017-10-28":"1019.2700","2017-10-29":"1019.2700","2017-11-04":"1032.4800"},"MSFT":{"2017-11-24":"83.2600","2017-11-22":"83.1100","2017-11-21":"83.7200","2017-11-20":"82.5300","2017-11-17":"82.4000","2017-11-16":"83.2000","2017-11-15":"82.9800","2017-11-14":"84.0500","2017-11-13":"83.9300","2017-11-10":"83.8700","2017-11-09":"84.0900","2017-11-08":"84.5600","2017-11-07":"84.2700","2017-11-06":"84.4700","2017-11-03":"84.1400","2017-11-02":"84.0500","2017-11-01":"83.1800","2017-10-31":"83.1800","2017-10-30":"83.8900","2017-10-27":"83.8100","2017-10-26":"78.7600","2017-10-25":"78.6300","2017-10-24":"78.8600","2017-10-23":"78.8300","2017-10-20":"78.8100","2017-10-19":"77.9100","2017-10-18":"77.6100","2017-10-17":"77.5900","2017-10-16":"77.6500","2017-10-13":"77.4900","2017-10-12":"77.1200","2017-10-11":"76.4200","2017-10-10":"76.2900","2017-10-09":"76.2900","2017-10-06":"76.0000","2017-10-05":"75.9700","2017-10-04":"74.6900","2017-10-03":"74.2600","2017-10-02":"74.6100","2017-09-29":"74.4900","2017-09-28":"73.8700","2017-09-27":"73.8500","2017-09-26":"73.2600","2017-09-25":"73.2600","2017-09-22":"74.4100","2017-09-21":"74.2100","2017-09-20":"74.9400","2017-09-19":"75.4400","2017-09-18":"75.1600","2017-09-15":"75.3100","2017-09-14":"74.7700","2017-09-13":"75.2100","2017-09-12":"74.6800","2017-09-11":"74.7600","2017-09-08":"73.9800","2017-09-07":"74.3400","2017-09-06":"73.4000","2017-09-05":"73.6100","2017-09-01":"73.9400","2017-08-31":"74.7700","2017-08-30":"74.0100","2017-08-29":"73.0500","2017-08-28":"72.8300","2017-08-25":"72.8200","2017-08-24":"72.6900","2017-08-23":"72.7200","2017-08-22":"73.1600","2017-08-21":"72.1500","2017-08-18":"72.4900","2017-08-17":"72.4000","2017-08-16":"73.6500","2017-08-15":"73.2200","2017-08-14":"73.5900","2017-08-11":"72.5000","2017-08-10":"71.4100","2017-08-09":"72.4700","2017-08-08":"72.7900","2017-08-07":"72.4000","2017-08-04":"72.6800","2017-08-03":"72.1500","2017-08-02":"72.2600","2017-08-01":"72.5800","2017-07-31":"72.7000","2017-07-28":"73.0400","2017-07-27":"73.1600","2017-07-26":"74.0500","2017-07-25":"74.1900","2017-07-24":"73.6000","2017-07-21":"73.7900","2017-07-20":"74.2200","2017-07-19":"73.8600","2017-07-18":"73.3000","2017-07-17":"73.3500","2017-07-14":"72.7800","2017-07-13":"71.7700","2017-07-12":"71.1500","2017-07-11":"69.9900","2017-07-10":"69.9800","2017-07-07":"69.4600","2017-07-06":"68.5700","2017-08-26":"72.8200","2017-08-27":"72.8200","2017-09-02":"73.9400","2017-09-03":"73.9400","2017-09-04":"73.9400","2017-09-09":"73.9800","2017-09-10":"73.9800","2017-09-16":"75.3100","2017-09-17":"75.3100","2017-09-23":"74.4100","2017-09-24":"74.4100","2017-09-30":"74.4900","2017-10-01":"74.4900","2017-10-07":"76.0000","2017-10-08":"76.0000","2017-10-14":"77.4900","2017-10-15":"77.4900","2017-10-21":"78.8100","2017-10-22":"78.8100","2017-10-28":"83.8100","2017-10-29":"83.8100","2017-11-04":"84.1400"},"NFLX":{"2017-11-24":"195.7500","2017-11-22":"196.3200","2017-11-21":"196.2300","2017-11-20":"194.1000","2017-11-17":"193.2000","2017-11-16":"195.5100","2017-11-15":"192.1200","2017-11-14":"195.7100","2017-11-13":"195.0800","2017-11-10":"192.0200","2017-11-09":"193.9000","2017-11-08":"196.4400","2017-11-07":"195.8900","2017-11-06":"200.1300","2017-11-03":"200.0100","2017-11-02":"199.3200","2017-11-01":"198.0000","2017-10-31":"196.4300","2017-10-30":"198.3700","2017-10-27":"199.5400","2017-10-26":"195.2100","2017-10-25":"193.7700","2017-10-24":"196.0200","2017-10-23":"192.4700","2017-10-20":"194.1600","2017-10-19":"195.1300","2017-10-18":"195.5400","2017-10-17":"199.4800","2017-10-16":"202.6800","2017-10-13":"199.4900","2017-10-12":"195.8600","2017-10-11":"194.9500","2017-10-10":"195.0800","2017-10-09":"196.8700","2017-10-06":"198.0200","2017-10-05":"194.3900","2017-10-04":"184.4500","2017-10-03":"179.1900","2017-10-02":"177.0100","2017-09-29":"181.3500","2017-09-28":"180.7000","2017-09-27":"181.9700","2017-09-26":"179.3800","2017-09-25":"178.5500","2017-09-22":"187.3500","2017-09-21":"188.7800","2017-09-20":"185.5100","2017-09-19":"185.6800","2017-09-18":"184.6200","2017-09-15":"182.3500","2017-09-14":"182.6300","2017-09-13":"183.6400","2017-09-12":"185.1500","2017-09-11":"181.7400","2017-09-08":"176.4200","2017-09-07":"179.0000","2017-09-06":"179.2500","2017-09-05":"174.5200","2017-09-01":"174.7400","2017-08-31":"174.7100","2017-08-30":"174.6900","2017-08-29":"168.8100","2017-08-28":"167.1200","2017-08-25":"165.9500","2017-08-24":"168.1300","2017-08-23":"169.0600","2017-08-22":"169.3400","2017-08-21":"166.7600","2017-08-18":"166.5400","2017-08-17":"166.0900","2017-08-16":"169.9800","2017-08-15":"168.5000","2017-08-14":"171.0000","2017-08-11":"171.4000","2017-08-10":"169.1400","2017-08-09":"175.7800","2017-08-08":"178.3600","2017-08-07":"181.3300","2017-08-04":"180.2700","2017-08-03":"179.2300","2017-08-02":"180.7400","2017-08-01":"182.0300","2017-07-31":"181.6600","2017-07-28":"184.0400","2017-07-27":"182.6800","2017-07-26":"189.0800","2017-07-25":"186.9700","2017-07-24":"187.9100","2017-07-21":"188.5400","2017-07-20":"183.6000","2017-07-19":"183.8600","2017-07-18":"183.6000","2017-07-17":"161.7000","2017-07-14":"161.1200","2017-07-13":"158.2100","2017-07-12":"158.7500","2017-07-11":"154.3300","2017-07-10":"152.6700","2017-07-07":"150.1800","2017-07-06":"146.2500","2017-08-26":"165.9500","2017-08-27":"165.9500","2017-09-02":"174.7400","2017-09-03":"174.7400","2017-09-04":"174.7400","2017-09-09":"176.4200","2017-09-10":"176.4200","2017-09-16":"182.3500","2017-09-17":"182.3500","2017-09-23":"187.3500","2017-09-24":"187.3500","2017-09-30":"181.3500","2017-10-01":"181.3500","2017-10-07":"198.0200","2017-10-08":"198.0200","2017-10-14":"199.4900","2017-10-15":"199.4900","2017-10-21":"194.1600","2017-10-22":"194.1600","2017-10-28":"199.5400","2017-10-29":"199.5400","2017-11-04":"200.0100"},"NVDA":{"2017-11-24":"216.9600","2017-11-22":"214.9300","2017-11-21":"216.0500","2017-11-20":"214.0800","2017-11-17":"211.3600","2017-11-16":"211.6100","2017-11-15":"209.9800","2017-11-14":"214.1800","2017-11-13":"212.6300","2017-11-10":"216.1400","2017-11-09":"205.3200","2017-11-08":"209.1600","2017-11-07":"212.0300","2017-11-06":"209.6300","2017-11-03":"208.6900","2017-11-02":"205.9400","2017-11-01":"207.2000","2017-10-31":"206.8100","2017-10-30":"203.8400","2017-10-27":"201.8600","2017-10-26":"195.6900","2017-10-25":"193.6600","2017-10-24":"198.6800","2017-10-23":"196.6200","2017-10-20":"196.9000","2017-10-19":"197.8000","2017-10-18":"197.5800","2017-10-17":"197.7500","2017-10-16":"197.9300","2017-10-13":"194.5900","2017-10-12":"191.0300","2017-10-11":"190.9400","2017-10-10":"188.9300","2017-10-09":"185.3900","2017-10-06":"181.3000","2017-10-05":"180.7700","2017-10-04":"180.8700","2017-10-03":"179.3700","2017-10-02":"179.0000","2017-09-29":"178.7700","2017-09-28":"175.6800","2017-09-27":"175.7300","2017-09-26":"171.9600","2017-09-25":"171.0000","2017-09-22":"179.0000","2017-09-21":"180.7600","2017-09-20":"185.8400","2017-09-19":"187.3500","2017-09-18":"187.5500","2017-09-15":"180.1100","2017-09-14":"169.4000","2017-09-13":"170.3700","2017-09-12":"169.6100","2017-09-11":"169.0000","2017-09-08":"163.6900","2017-09-07":"166.5800","2017-09-06":"165.8100","2017-09-05":"165.9100","2017-09-01":"170.4600","2017-08-31":"169.4400","2017-08-30":"165.6800","2017-08-29":"164.7000","2017-08-28":"164.9700","2017-08-25":"163.8100","2017-08-24":"165.1900","2017-08-23":"165.8000","2017-08-22":"162.5500","2017-08-21":"159.1500","2017-08-18":"161.5000","2017-08-17":"161.4700","2017-08-16":"165.1500","2017-08-15":"166.9800","2017-08-14":"168.4000","2017-08-11":"155.9600","2017-08-10":"164.7400","2017-08-09":"172.1100","2017-08-08":"170.3000","2017-08-07":"172.3500","2017-08-04":"167.2100","2017-08-03":"166.4800","2017-08-02":"164.3900","2017-08-01":"164.4900","2017-07-31":"162.5100","2017-07-28":"164.3900","2017-07-27":"161.7400","2017-07-26":"167.2600","2017-07-25":"165.3500","2017-07-24":"166.1500","2017-07-21":"168.1000","2017-07-20":"167.5000","2017-07-19":"165.1000","2017-07-18":"165.9600","2017-07-17":"164.2500","2017-07-14":"164.9500","2017-07-13":"160.6300","2017-07-12":"162.5100","2017-07-11":"155.8800","2017-07-10":"153.7000","2017-07-07":"146.7600","2017-07-06":"143.4800","2017-08-26":"163.8100","2017-08-27":"163.8100","2017-09-02":"170.4600","2017-09-03":"170.4600","2017-09-04":"170.4600","2017-09-09":"163.6900","2017-09-10":"163.6900","2017-09-16":"180.1100","2017-09-17":"180.1100","2017-09-23":"179.0000","2017-09-24":"179.0000","2017-09-30":"178.7700","2017-10-01":"178.7700","2017-10-07":"181.3000","2017-10-08":"181.3000","2017-10-14":"194.5900","2017-10-15":"194.5900","2017-10-21":"196.9000","2017-10-22":"196.9000","2017-10-28":"201.8600","2017-10-29":"201.8600","2017-11-04":"208.6900"},"TSLA":{"2017-11-24":"315.5500","2017-11-22":"312.6000","2017-11-21":"317.8100","2017-11-20":"308.7400","2017-11-17":"315.0500","2017-11-16":"312.5000","2017-11-15":"311.3000","2017-11-14":"308.7000","2017-11-13":"315.4000","2017-11-10":"302.9900","2017-11-09":"302.9900","2017-11-08":"304.3900","2017-11-07":"306.0500","2017-11-06":"302.7800","2017-11-03":"306.0900","2017-11-02":"299.2600","2017-11-01":"321.0800","2017-10-31":"331.5300","2017-10-30":"320.0800","2017-10-27":"320.8700","2017-10-26":"326.1700","2017-10-25":"325.8400","2017-10-24":"337.3400","2017-10-23":"337.0200","2017-10-20":"345.1000","2017-10-19":"351.8100","2017-10-18":"359.6500","2017-10-17":"355.7500","2017-10-16":"350.6000","2017-10-13":"355.5700","2017-10-12":"355.6800","2017-10-11":"354.6000","2017-10-10":"355.5900","2017-10-09":"342.9400","2017-10-06":"356.8800","2017-10-05":"355.3300","2017-10-04":"355.0100","2017-10-03":"348.1400","2017-10-02":"341.5300","2017-09-29":"341.1000","2017-09-28":"339.6000","2017-09-27":"340.9700","2017-09-26":"345.2500","2017-09-25":"344.9900","2017-09-22":"351.0900","2017-09-21":"366.4800","2017-09-20":"373.9100","2017-09-19":"375.1000","2017-09-18":"385.0000","2017-09-15":"379.8100","2017-09-14":"377.6400","2017-09-13":"366.2300","2017-09-12":"362.7500","2017-09-11":"363.6900","2017-09-08":"343.4000","2017-09-07":"350.6100","2017-09-06":"344.5300","2017-09-05":"349.5900","2017-09-01":"355.4000","2017-08-31":"355.9000","2017-08-30":"353.1800","2017-08-29":"347.3600","2017-08-28":"345.6600","2017-08-25":"348.0500","2017-08-24":"352.9300","2017-08-23":"352.7700","2017-08-22":"341.3500","2017-08-21":"337.8600","2017-08-18":"347.4600","2017-08-17":"351.9200","2017-08-16":"362.9100","2017-08-15":"362.3300","2017-08-14":"363.8000","2017-08-11":"357.8700","2017-08-10":"355.4000","2017-08-09":"363.5300","2017-08-08":"365.2200","2017-08-07":"355.1700","2017-08-04":"356.9100","2017-08-03":"347.0900","2017-08-02":"325.8900","2017-08-01":"319.5700","2017-07-31":"323.4700","2017-07-28":"335.0700","2017-07-27":"334.4600","2017-07-26":"343.8500","2017-07-25":"339.6000","2017-07-24":"342.5200","2017-07-21":"328.4000","2017-07-20":"329.9200","2017-07-19":"325.2600","2017-07-18":"328.2400","2017-07-17":"319.5700","2017-07-14":"327.7800","2017-07-13":"323.4100","2017-07-12":"329.5200","2017-07-11":"327.2200","2017-07-10":"316.0500","2017-07-07":"313.2200","2017-07-06":"308.8300","2017-08-26":"348.0500","2017-08-27":"348.0500","2017-09-02":"355.4000","2017-09-03":"355.4000","2017-09-04":"355.4000","2017-09-09":"343.4000","2017-09-10":"343.4000","2017-09-16":"379.8100","2017-09-17":"379.8100","2017-09-23":"351.0900","2017-09-24":"351.0900","2017-09-30":"341.1000","2017-10-01":"341.1000","2017-10-07":"356.8800","2017-10-08":"356.8800","2017-10-14":"355.5700","2017-10-15":"355.5700","2017-10-21":"345.1000","2017-10-22":"345.1000","2017-10-28":"320.8700","2017-10-29":"320.8700","2017-11-04":"306.0900"},"TWTR":{"2017-11-24":"22.4200","2017-11-22":"22.2700","2017-11-21":"21.8800","2017-11-20":"21.1300","2017-11-17":"20.7600","2017-11-16":"20.3600","2017-11-15":"19.9100","2017-11-14":"20.0500","2017-11-13":"20.1700","2017-11-10":"20.3200","2017-11-09":"19.9000","2017-11-08":"19.5900","2017-11-07":"19.6600","2017-11-06":"19.3900","2017-11-03":"19.9000","2017-11-02":"19.7100","2017-11-01":"20.6100","2017-10-31":"20.6200","2017-10-30":"21.2500","2017-10-27":"21.6800","2017-10-26":"20.3100","2017-10-25":"17.1400","2017-10-24":"17.2500","2017-10-23":"17.3700","2017-10-20":"17.8700","2017-10-19":"17.8900","2017-10-18":"18.0200","2017-10-17":"18.2800","2017-10-16":"18.3300","2017-10-13":"18.6300","2017-10-12":"18.4500","2017-10-11":"17.7300","2017-10-10":"17.4100","2017-10-09":"17.6700","2017-10-06":"17.8500","2017-10-05":"18.2500","2017-10-04":"17.7500","2017-10-03":"17.5900","2017-10-02":"17.0900","2017-09-29":"16.8700","2017-09-28":"16.8500","2017-09-27":"16.9500","2017-09-26":"16.5900","2017-09-25":"16.9800","2017-09-22":"17.6100","2017-09-21":"17.5800","2017-09-20":"17.6200","2017-09-19":"17.7600","2017-09-18":"17.6000","2017-09-15":"18.0100","2017-09-14":"18.2100","2017-09-13":"18.2000","2017-09-12":"18.1700","2017-09-11":"17.6600","2017-09-08":"17.4500","2017-09-07":"17.2200","2017-09-06":"16.8300","2017-09-05":"16.6500","2017-09-01":"16.8600","2017-08-31":"16.9100","2017-08-30":"16.9300","2017-08-29":"16.9300","2017-08-28":"16.7700","2017-08-25":"16.6500","2017-08-24":"16.8900","2017-08-23":"16.9600","2017-08-22":"16.6300","2017-08-21":"16.1100","2017-08-18":"15.9900","2017-08-17":"15.8700","2017-08-16":"16.1600","2017-08-15":"15.9500","2017-08-14":"16.0900","2017-08-11":"15.9200","2017-08-10":"15.7500","2017-08-09":"16.1400","2017-08-08":"16.1500","2017-08-07":"16.4000","2017-08-04":"16.2900","2017-08-03":"16.1800","2017-08-02":"16.0700","2017-08-01":"16.2100","2017-07-31":"16.0900","2017-07-28":"16.7500","2017-07-27":"16.8400","2017-07-26":"19.6100","2017-07-25":"19.9700","2017-07-24":"20.0000","2017-07-21":"20.1100","2017-07-20":"20.5300","2017-07-19":"20.1200","2017-07-18":"19.9800","2017-07-17":"19.9400","2017-07-14":"19.6400","2017-07-13":"19.3200","2017-07-12":"19.2500","2017-07-11":"18.6400","2017-07-10":"18.0800","2017-07-07":"18.0200","2017-07-06":"17.9200","2017-08-26":"16.6500","2017-08-27":"16.6500","2017-09-02":"16.8600","2017-09-03":"16.8600","2017-09-04":"16.8600","2017-09-09":"17.4500","2017-09-10":"17.4500","2017-09-16":"18.0100","2017-09-17":"18.0100","2017-09-23":"17.6100","2017-09-24":"17.6100","2017-09-30":"16.8700","2017-10-01":"16.8700","2017-10-07":"17.8500","2017-10-08":"17.8500","2017-10-14":"18.6300","2017-10-15":"18.6300","2017-10-21":"17.8700","2017-10-22":"17.8700","2017-10-28":"21.6800","2017-10-29":"21.6800","2017-11-04":"19.9000"},"WMT":{"2017-11-24":"96.6200","2017-11-22":"96.4100","2017-11-21":"96.5200","2017-11-20":"97.4800","2017-11-17":"97.4700","2017-11-16":"99.6200","2017-11-15":"89.8300","2017-11-14":"91.0900","2017-11-13":"90.9900","2017-11-10":"90.9200","2017-11-09":"90.3000","2017-11-08":"90.2600","2017-11-07":"88.9500","2017-11-06":"88.7000","2017-11-03":"89.6800","2017-11-02":"88.8000","2017-11-01":"87.9400","2017-10-31":"87.3100","2017-10-30":"86.9500","2017-10-27":"88.1700","2017-10-26":"88.6200","2017-10-25":"88.4800","2017-10-24":"87.9800","2017-10-23":"88.6500","2017-10-20":"87.4400","2017-10-19":"86.4000","2017-10-18":"86.2200","2017-10-17":"85.9800","2017-10-16":"85.7400","2017-10-13":"86.6200","2017-10-12":"86.1000","2017-10-11":"85.7300","2017-10-10":"84.1300","2017-10-09":"80.5300","2017-10-06":"79.0000","2017-10-05":"79.4100","2017-10-04":"79.0900","2017-10-03":"79.2200","2017-10-02":"78.4500","2017-09-29":"78.1400","2017-09-28":"78.9500","2017-09-27":"79.2900","2017-09-26":"79.3900","2017-09-25":"79.1500","2017-09-22":"79.5300","2017-09-21":"80.0100","2017-09-20":"80.5000","2017-09-19":"80.0500","2017-09-18":"80.0000","2017-09-15":"80.3800","2017-09-14":"79.6800","2017-09-13":"79.8600","2017-09-12":"79.6100","2017-09-11":"79.0800","2017-09-08":"78.8800","2017-09-07":"80.1200","2017-09-06":"80.0800","2017-09-05":"79.8000","2017-09-01":"78.3700","2017-08-31":"78.0700","2017-08-30":"78.5400","2017-08-29":"78.7700","2017-08-28":"78.0300","2017-08-25":"78.6300","2017-08-24":"78.3400","2017-08-23":"79.9600","2017-08-22":"80.0200","2017-08-21":"79.7100","2017-08-18":"79.3100","2017-08-17":"79.7000","2017-08-16":"80.9800","2017-08-15":"80.7700","2017-08-14":"80.7000","2017-08-11":"80.4000","2017-08-10":"80.6600","2017-08-09":"81.6100","2017-08-08":"81.5900","2017-08-07":"81.2800","2017-08-04":"80.4800","2017-08-03":"80.8700","2017-08-02":"80.5300","2017-08-01":"80.5000","2017-07-31":"79.9900","2017-07-28":"79.8100","2017-07-27":"79.7800","2017-07-26":"78.9000","2017-07-25":"78.5200","2017-07-24":"76.8900","2017-07-21":"76.1500","2017-07-20":"76.0200","2017-07-19":"75.8700","2017-07-18":"76.2000","2017-07-17":"76.3700","2017-07-14":"76.3400","2017-07-13":"75.0500","2017-07-12":"73.9400","2017-07-11":"73.4700","2017-07-10":"73.2300","2017-07-07":"75.3300","2017-07-06":"75.4700","2017-08-26":"78.6300","2017-08-27":"78.6300","2017-09-02":"78.3700","2017-09-03":"78.3700","2017-09-04":"78.3700","2017-09-09":"78.8800","2017-09-10":"78.8800","2017-09-16":"80.3800","2017-09-17":"80.3800","2017-09-23":"79.5300","2017-09-24":"79.5300","2017-09-30":"78.1400","2017-10-01":"78.1400","2017-10-07":"79.0000","2017-10-08":"79.0000","2017-10-14":"86.6200","2017-10-15":"86.6200","2017-10-21":"87.4400","2017-10-22":"87.4400","2017-10-28":"88.1700","2017-10-29":"88.1700","2017-11-04":"89.6800"},"XOM":{"2017-11-24":"81.4200","2017-11-22":"81.1000","2017-11-21":"80.8700","2017-11-20":"80.5500","2017-11-17":"80.2400","2017-11-16":"80.5600","2017-11-15":"81.2100","2017-11-14":"82.2400","2017-11-13":"82.8900","2017-11-10":"82.9400","2017-11-09":"83.9700","2017-11-08":"83.4700","2017-11-07":"83.5800","2017-11-06":"83.7500","2017-11-03":"83.1800","2017-11-02":"83.5300","2017-11-01":"83.8700","2017-10-31":"83.3500","2017-10-30":"83.5400","2017-10-27":"83.7100","2017-10-26":"83.4700","2017-10-25":"83.1700","2017-10-24":"83.4700","2017-10-23":"83.2400","2017-10-20":"83.1100","2017-10-19":"82.7400","2017-10-18":"82.7600","2017-10-17":"82.9600","2017-10-16":"82.8100","2017-10-13":"82.4100","2017-10-12":"82.4300","2017-10-11":"82.6000","2017-10-10":"82.2600","2017-10-09":"82.0300","2017-10-06":"81.7100","2017-10-05":"82.0200","2017-10-04":"81.7900","2017-10-03":"81.7600","2017-10-02":"81.6300","2017-09-29":"81.9800","2017-09-28":"82.1900","2017-09-27":"81.4300","2017-09-26":"80.8900","2017-09-25":"80.9800","2017-09-22":"79.9200","2017-09-21":"79.8900","2017-09-20":"80.5500","2017-09-19":"80.2200","2017-09-18":"80.0900","2017-09-15":"80.0700","2017-09-14":"80.0900","2017-09-13":"79.7700","2017-09-12":"79.5000","2017-09-11":"79.2500","2017-09-08":"78.8200","2017-09-07":"79.0300","2017-09-06":"78.7800","2017-09-05":"77.1800","2017-09-01":"76.5700","2017-08-31":"76.3300","2017-08-30":"76.1000","2017-08-29":"76.4500","2017-08-28":"76.4700","2017-08-25":"76.7200","2017-08-24":"76.3300","2017-08-23":"76.6100","2017-08-22":"76.7400","2017-08-21":"76.3800","2017-08-18":"76.6400","2017-08-17":"76.2600","2017-08-16":"77.4700","2017-08-15":"78.0400","2017-08-14":"78.2300","2017-08-11":"78.2100","2017-08-10":"78.9700","2017-08-09":"80.2100","2017-08-08":"79.9600","2017-08-07":"80.1600","2017-08-04":"80.2100","2017-08-03":"80.4900","2017-08-02":"80.6000","2017-08-01":"80.1700","2017-07-31":"80.0400","2017-07-28":"79.6000","2017-07-27":"80.8300","2017-07-26":"80.3700","2017-07-25":"80.2700","2017-07-24":"79.8700","2017-07-21":"80.1200","2017-07-20":"80.8600","2017-07-19":"80.8500","2017-07-18":"80.6000","2017-07-17":"80.8600","2017-07-14":"81.2800","2017-07-13":"80.9700","2017-07-12":"80.9600","2017-07-11":"80.6000","2017-07-10":"80.1600","2017-07-07":"80.2200","2017-07-06":"80.1200","2017-08-26":"76.7200","2017-08-27":"76.7200","2017-09-02":"76.5700","2017-09-03":"76.5700","2017-09-04":"76.5700","2017-09-09":"78.8200","2017-09-10":"78.8200","2017-09-16":"80.0700","2017-09-17":"80.0700","2017-09-23":"79.9200","2017-09-24":"79.9200","2017-09-30":"81.9800","2017-10-01":"81.9800","2017-10-07":"81.7100","2017-10-08":"81.7100","2017-10-14":"82.4100","2017-10-15":"82.4100","2017-10-21":"83.1100","2017-10-22":"83.1100","2017-10-28":"83.7100","2017-10-29":"83.7100","2017-11-04":"83.1800"},"YY":{"2017-11-24":"120.0300","2017-11-22":"121.6200","2017-11-21":"118.8000","2017-11-20":"117.6000","2017-11-17":"107.2300","2017-11-16":"107.0200","2017-11-15":"111.3900","2017-11-14":"89.2300","2017-11-13":"90.6000","2017-11-10":"88.9000","2017-11-09":"90.6500","2017-11-08":"89.4000","2017-11-07":"91.3600","2017-11-06":"92.3400","2017-11-03":"90.5100","2017-11-02":"88.0900","2017-11-01":"89.2400","2017-10-31":"90.3900","2017-10-30":"87.3700","2017-10-27":"85.3400","2017-10-26":"87.1500","2017-10-25":"89.9800","2017-10-24":"94.0500","2017-10-23":"95.7100","2017-10-20":"93.1200","2017-10-19":"92.7700","2017-10-18":"94.9400","2017-10-17":"94.4200","2017-10-16":"97.3200","2017-10-13":"93.2200","2017-10-12":"91.0800","2017-10-11":"90.1800","2017-10-10":"89.2700","2017-10-09":"89.4900","2017-10-06":"88.7400","2017-10-05":"88.9500","2017-10-04":"88.7700","2017-10-03":"90.3200","2017-10-02":"90.1300","2017-09-29":"86.7800","2017-09-28":"85.8200","2017-09-27":"85.0800","2017-09-26":"84.4200","2017-09-25":"77.4700","2017-09-22":"80.5200","2017-09-21":"76.0700","2017-09-20":"76.8900","2017-09-19":"76.9400","2017-09-18":"76.7100","2017-09-15":"77.1100","2017-09-14":"78.8700","2017-09-13":"78.4500","2017-09-12":"78.8100","2017-09-11":"78.3900","2017-09-08":"78.0100","2017-09-07":"78.8100","2017-09-06":"74.6900","2017-09-05":"73.9800","2017-09-01":"74.3500","2017-08-31":"74.7200","2017-08-30":"71.0900","2017-08-29":"69.5200","2017-08-28":"71.0000","2017-08-25":"72.2900","2017-08-24":"75.2400","2017-08-23":"74.2400","2017-08-22":"74.1400","2017-08-21":"76.2300","2017-08-18":"73.6900","2017-08-17":"71.4500","2017-08-16":"72.0000","2017-08-15":"73.1000","2017-08-14":"80.5800","2017-08-11":"78.9200","2017-08-10":"77.8600","2017-08-09":"77.9700","2017-08-08":"76.2700","2017-08-07":"76.5800","2017-08-04":"73.4900","2017-08-03":"74.0800","2017-08-02":"71.2000","2017-08-01":"71.7400","2017-07-31":"71.5000","2017-07-28":"71.6400","2017-07-27":"70.6400","2017-07-26":"71.1500","2017-07-25":"73.0200","2017-07-24":"70.6900","2017-07-21":"67.5900","2017-07-20":"67.5600","2017-07-19":"66.6100","2017-07-18":"67.1200","2017-07-17":"65.8700","2017-07-14":"63.7900","2017-07-13":"58.4700","2017-07-12":"59.9800","2017-07-11":"57.6000","2017-07-10":"57.9800","2017-07-07":"56.8300","2017-07-06":"56.4800","2017-08-26":"72.2900","2017-08-27":"72.2900","2017-09-02":"74.3500","2017-09-03":"74.3500","2017-09-04":"74.3500","2017-09-09":"78.0100","2017-09-10":"78.0100","2017-09-16":"77.1100","2017-09-17":"77.1100","2017-09-23":"80.5200","2017-09-24":"80.5200","2017-09-30":"86.7800","2017-10-01":"86.7800","2017-10-07":"88.7400","2017-10-08":"88.7400","2017-10-14":"93.2200","2017-10-15":"93.2200","2017-10-21":"93.1200","2017-10-22":"93.1200","2017-10-28":"85.3400","2017-10-29":"85.3400","2017-11-04":"90.5100"}}