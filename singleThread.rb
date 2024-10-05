require 'thread';
require 'securerandom';

def imprime(i)
  sleep(rand(1..5));
  puts "Olá Mundo - #{i}";
end

puts "Iniciando processo";
i = 0;
t1 = Thread.new { imprime(i) };

t1.join;

print "Finalizando o processo!\n";